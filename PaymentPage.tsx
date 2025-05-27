import React, { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';

// Load Stripe outside of component to avoid recreating Stripe object on every render
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

type CheckoutFormProps = {
  amount: number;
  description: string;
  onSuccess: () => void;
  onCancel: () => void;
};

// Form that handles collecting payment details
const CheckoutForm: React.FC<CheckoutFormProps> = ({ amount, description, onSuccess, onCancel }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setErrorMessage(null);

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: window.location.origin, // In production, redirect to a success page
        },
        redirect: 'if_required',
      });

      if (error) {
        setErrorMessage(error.message || 'Something went wrong.');
        toast({
          title: 'Payment Failed',
          description: error.message || 'There was an issue processing your payment.',
          variant: 'destructive',
        });
      } else {
        // Payment succeeded
        toast({
          title: 'Payment Successful',
          description: 'Your payment has been processed successfully. Thank you!',
        });
        onSuccess();
      }
    } catch (error: any) {
      setErrorMessage(error.message || 'An unexpected error occurred.');
      toast({
        title: 'Error',
        description: error.message || 'An unexpected error occurred.',
        variant: 'destructive',
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />
      
      {errorMessage && (
        <div className="text-red-500 text-sm mt-2">
          {errorMessage}
        </div>
      )}
      
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2 border border-gold text-gold rounded-full hover:bg-gold/10 transition-all"
          disabled={isProcessing}
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={!stripe || isProcessing}
          className="px-6 py-2 bg-gold text-white rounded-full hover:bg-gold/80 transition-all disabled:opacity-50"
        >
          {isProcessing ? 'Processing...' : `Pay ₹${amount.toLocaleString()}`}
        </button>
      </div>
    </form>
  );
};

// Wrapper component that initializes payment flow
const PaymentPage: React.FC = () => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState<number>(0);
  const [paymentDescription, setPaymentDescription] = useState<string>('');
  const [showPayment, setShowPayment] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const { toast } = useToast();
  
  const packages = [
    { id: 'silver', name: 'Silver Package', price: 250000, description: 'Silver Wedding Package' },
    { id: 'gold', name: 'Gold Package', price: 500000, description: 'Gold Wedding Package' },
    { id: 'platinum', name: 'Platinum Package', price: 800000, description: 'Platinum Wedding Package' },
  ];

  const handleSelectPackage = (packageId: string) => {
    const selectedPkg = packages.find(p => p.id === packageId);
    if (selectedPkg) {
      setSelectedPackage(packageId);
      setPaymentAmount(selectedPkg.price);
      setPaymentDescription(selectedPkg.description);
    }
  };

  const handleInitiatePayment = async () => {
    if (!paymentAmount) {
      toast({
        title: 'Error',
        description: 'Please select a package first.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await apiRequest('POST', '/api/create-payment-intent', {
        amount: paymentAmount,
        description: paymentDescription,
      });
      
      const data = await response.json();
      setClientSecret(data.clientSecret);
      setShowPayment(true);
    } catch (error: any) {
      console.error('Error creating payment intent:', error);
      toast({
        title: 'Error',
        description: 'Could not initiate payment process. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePaymentSuccess = () => {
    setShowPayment(false);
    setSelectedPackage(null);
    // In a real app, you might redirect to an order confirmation page or show a success modal
  };

  const handlePaymentCancel = () => {
    setShowPayment(false);
    // Optional: you could keep the selected package
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-serif text-charcoal mb-6">Secure Payment</h2>
      
      {!showPayment ? (
        <div className="space-y-6">
          <div className="bg-ivory p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-4">Select a Package</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {packages.map((pkg) => (
                <div 
                  key={pkg.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-all ${
                    selectedPackage === pkg.id 
                      ? 'border-gold bg-gold/5' 
                      : 'border-blush/30 hover:border-gold/50'
                  }`}
                  onClick={() => handleSelectPackage(pkg.id)}
                >
                  <h4 className="font-medium">{pkg.name}</h4>
                  <p className="text-gold font-medium mt-2">₹{pkg.price.toLocaleString()}</p>
                </div>
              ))}
            </div>
            
            {selectedPackage && (
              <div className="bg-white p-4 rounded-lg border border-blush/30 mb-6">
                <div className="flex justify-between mb-2">
                  <span>Package:</span>
                  <span className="font-medium">{packages.find(p => p.id === selectedPackage)?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Amount:</span>
                  <span className="text-gold font-medium">₹{paymentAmount.toLocaleString()}</span>
                </div>
              </div>
            )}
            
            <button
              onClick={handleInitiatePayment}
              disabled={!selectedPackage || isLoading}
              className="w-full bg-gold text-white py-3 rounded-lg hover:bg-gold/80 transition-all disabled:opacity-50"
            >
              {isLoading ? 'Processing...' : 'Proceed to Payment'}
            </button>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-blush/30">
            <h4 className="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Secure Payment
            </h4>
            <p className="text-sm text-charcoal/70">
              All payments are processed securely through Stripe. Your payment information is encrypted and never stored on our servers.
            </p>
          </div>
        </div>
      ) : clientSecret ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Elements 
            stripe={stripePromise} 
            options={{ clientSecret, appearance: { theme: 'stripe' } }}
          >
            <CheckoutForm 
              amount={paymentAmount} 
              description={paymentDescription}
              onSuccess={handlePaymentSuccess}
              onCancel={handlePaymentCancel}
            />
          </Elements>
        </div>
      ) : (
        <div className="flex justify-center py-10">
          <div className="animate-spin w-8 h-8 border-4 border-gold border-t-transparent rounded-full"></div>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;