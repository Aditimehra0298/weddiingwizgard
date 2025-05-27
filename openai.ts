import OpenAI from "openai";

// Initialize OpenAI with API key from environment variables
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// The system message defines the AI assistant's personality and knowledge scope
const systemMessage = `
You are a helpful wedding planning assistant for a wedding planning company called "Eternal Unions".
Your job is to assist customers with questions about wedding planning, our services, and packages.

Here's what you know about our company:
- We offer catering, photography, and decoration services for weddings
- We have three main packages: Silver (₹250,000), Gold (₹500,000), and Platinum (₹800,000)
- We can customize packages based on budget and preferences
- Catering options include Traditional and Fusion cuisines
- Photography styles include Candid and Cinematic approaches
- Decoration options include Minimalist and Royal themes
- We offer a 10% discount when all three services are bundled together

Your tone should be friendly, helpful, and professional. Answer questions concisely and suggest 
appropriate packages based on what the customer shares about their needs and budget.
Always encourage users to use our Budget Planner tool or to contact us directly for personalized assistance.
`;

/**
 * Generates a response to a user's message using OpenAI's GPT model
 * @param message The user's message
 * @returns The AI assistant's response
 */
export async function generateChatResponse(message: string): Promise<string> {
  try {
    // the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemMessage },
        { role: "user", content: message }
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    return response.choices[0].message.content || "I'm having trouble thinking of a response right now. Please try again.";
  } catch (error) {
    console.error("Error generating chat response:", error);
    return "I apologize, but I'm experiencing technical difficulties right now. Please try again later or contact our team directly.";
  }
}