import OpenAI from "openai";
import { MessageType } from "../models/Message";
import { getLatestMessages } from "./discussion";

const client = new OpenAI({
    apiKey: import.meta.env.VITE_AI_API_KEY, 
    dangerouslyAllowBrowser: true 
});

/**
 * Ask the AI agent to reply you according to latest exchanges
 * 
 * @returns the string answer provided by the agent
 */
export const interactWithAI = async (): Promise<string> => {
    // Retrieves the latest messages in the discussion
    const latestMessages = getLatestMessages();

    const completion = await client.chat.completions.create({
        model: "gpt-4o",
        messages: latestMessages.map((message) => ({ 
            role: message.type === MessageType.SENT ? 'user': 'assistant',
            content: message.content
        }))
    });
    
    return completion.choices[0].message.content || '';
}
