import { authOptions } from "@/app/lib/auth";
import { error } from "console";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, phone, adress } = await request.json();
const session = await getServerSession(authOptions)

if(!session || !session.user){
    return NextResponse.json({error: "nota authorazied"}, {status: 400})
}
  return NextResponse.json({ message: "cadastro de usuário" });
}
