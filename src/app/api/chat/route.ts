import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY!,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const response = await openai.chat.completions.create({
      model: "openai/gpt-oss-120b",
      messages,
    });
    return Response.json({
      reply: response.choices[0].message.content,
    });
  } catch (error: any) {
    console.error("🔥 FULL ERROR:", error);

    return Response.json(
      { error: error.message, details: error },
      { status: 500 },
    );
  }
}
