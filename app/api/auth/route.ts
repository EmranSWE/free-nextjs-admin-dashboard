// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { messages } = body;
//     // console.log("Message", messages)
//     return NextResponse.json(messages);
//   } catch (error) {
//     console.log("[AUTH-ERROR]", error);
//     return new NextResponse("Internal Error", { status: 500 });
//   }
// }