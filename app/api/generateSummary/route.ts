import { NextResponse } from "next/server";
import openai from "@/openai";


export async function POST(request: Request){
   const { todos } = await request.json();

   //communicate with openAI chatGPT
   const response = await  openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    n:1,
    stream: false,
    messages: [
        {
            "role": "system", 
            "content": `when responding, welcome the user always as Puffozaurus. Limit response to 200 characters`,
        },
        {
            "role": "user", 
            "content": `Hi there , provide a summary of the following todos. Count how many todos in each category such as CPW to serve CPWalready CPN CPNalready then tell the user to have productive data Here is data: ${JSON.stringify(todos)}`,

        },
        ],

    });
   

   


    return NextResponse.json(response.choices[0].message)
    
}