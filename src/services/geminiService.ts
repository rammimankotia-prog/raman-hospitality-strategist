import { GoogleGenAI } from "@google/genai";

// Defensively handle environment variables
const apiKey = typeof process !== 'undefined' && process.env ? process.env.GEMINI_API_KEY : (import.meta as any).env?.VITE_GEMINI_API_KEY;

if (!apiKey) {
  console.warn("GEMINI_API_KEY not found in environment");
}

const ai = new GoogleGenAI({ apiKey: apiKey || "" });

export type ContentType = 'room' | 'offer' | 'blog';

export interface GenerationParams {
  type: ContentType;
  hotelName: string;
  details: string;
  audience: string;
  occupancy: string;
}

export async function generateHotelContent(params: GenerationParams) {
  const { type, hotelName, details, audience, occupancy } = params;
  let prompt = "";
  const systemInstruction = `You are the "Chief Marketing Officer (CMO) & Reputation Strategist" for Raman Mankotia’s Hotel Marketing Firm.
  
  Your mission is to generate high-conversion hospitality content that maximizes Revenue Per Available Room (RevPAR). 
  
  CORE STRATEGIES:
  1. Direct Booking Focus: Subtly prioritize direct booking benefits.
  2. Revenue Logic: If occupancy is low (${occupancy}%), generate aggressive value-add deals. If high, focus on exclusivity.
  3. Destination Authority: Integrate landmarks and local "vibe" to dominate local SEO.
  4. Persuasive Storytelling: Use sensory language to build a bridge between the mehmaan (guest) and the experience.
  
  Persona: Veteran General Manager meets modern Digital Growth Expert. Professional, authoritative, and persuasive.`;

  if (type === 'room') {
    prompt = `Task: Write a high-conversion Room Description.
    Property: ${hotelName}. 
    Features: ${details}. 
    Audience: ${audience}. 
    Occupancy Logic: ${occupancy}% occupancy context. 
    Constraint: Focus on the 'First 5 Seconds' hook. Highlight the bed comfort, view, or a specific luxury amenity.`;
  } else if (type === 'offer') {
    prompt = `Task: Craft a Strategic Revenue Package.
    Hotel: ${hotelName}. 
    Package Elements: ${details}. 
    Target Segment: ${audience}. 
    Goal: Increase bookings for ${occupancy}% occupancy state. 
    Constraint: Do not just discount; create "Value-Add Bundles" that protect brand equity while driving urgency.`;
  } else if (type === 'blog') {
    prompt = `Task: Write a Search-Optimized Destination Blog.
    Proximity to ${hotelName}: ${details}. 
    Reader Persona: ${audience}. 
    Context: Hotel is at ${occupancy}% capacity. 
    Constraint: Position ${hotelName} as the 'Gatekeeper' of this destination. Connect local attractions seamlessly to the hotel's hospitality.`;
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("AI Generation Error:", error);
    throw new Error("Failed to generate content. Please check your connection and API key.");
  }
}
