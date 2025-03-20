import OpenAI from "openai";

const client = new OpenAI({
    apiKey: import.meta.env.VITE_AI_API_KEY, 
    dangerouslyAllowBrowser: true 
});

export const interactWithAI = async (): Promise<string> => {
    const completion = await client.chat.completions.create({
        model: "gpt-4o",
        messages: [
            {
                role: "user",
                content: "Write a one-sentence bedtime story about a unicorn.",
            },
        ],
    });
    
    return completion.choices[0].message.content || '';
}
