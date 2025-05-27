import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { generateChatResponse } from "./openai";
import Stripe from "stripe";

// Contact Form Schema
const contactFormSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(10),
  weddingDate: z.string().min(1),
  message: z.string().min(10),
});

// Chat message schema
const chatMessageSchema = z.object({
  message: z.string().min(1).max(1000),
});

// Payment Intent schema
const paymentIntentSchema = z.object({
  amount: z.number().positive(),
  description: z.string().optional(),
});

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-04-30.basil",
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post('/api/contact', async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // In a real application, you would save this to a database
      // or send an email notification
      
      res.status(200).json({ 
        success: true, 
        message: 'Contact form submitted successfully' 
      });
    } catch (error) {
      console.error('Error processing contact form:', error);
      res.status(400).json({ 
        success: false, 
        message: 'Invalid form data' 
      });
    }
  });

  // Chat with AI assistant
  app.post('/api/chat', async (req, res) => {
    try {
      const { message } = chatMessageSchema.parse(req.body);
      const response = await generateChatResponse(message);
      
      res.status(200).json({ message: response });
    } catch (error) {
      console.error('Error processing chat message:', error);
      res.status(400).json({ 
        success: false, 
        message: 'Failed to process your message. Please try again.' 
      });
    }
  });

  // Create a payment intent with Stripe
  app.post('/api/create-payment-intent', async (req, res) => {
    try {
      const { amount, description } = paymentIntentSchema.parse(req.body);
      
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100), // Convert to cents/paisa
        currency: 'inr',
        description: description || 'Wedding package payment',
        metadata: {
          integration_check: 'accept_a_payment',
        },
      });
      
      res.status(200).json({ 
        clientSecret: paymentIntent.client_secret,
      });
    } catch (error) {
      console.error('Error creating payment intent:', error);
      res.status(400).json({ 
        success: false, 
        message: 'Failed to create payment intent. Please try again.' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
