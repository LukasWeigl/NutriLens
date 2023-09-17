import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
});

const instructionMessage: String =
  "You are a nutrition expert, you receiving User Information about a certain product with ingredients and dosage usage. You will list all ingredients with their benefits and if the dosage is right. At the end you will a 1-10 Rating for the product. You answer in the language of the user.";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages } = body;
    console.log("Messages: "+messages)
    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    //const response = await openai.createChatCompletion({
    //  model: "gpt-3.5-turbo",
    //  messages: [instructionMessage, ...messages]
    //});

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "system", content: instructionMessage+ " User Information: " +messages }],
    });
    console.log(response.choices[0].message);

    return NextResponse.json(response);
  } catch (error) {
    console.log("[CODE_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
