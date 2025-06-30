import { authOptions } from "@/app/lib/auth";
import PrismaClient from '../../lib/prisma'
import { error } from "console";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const session = await getServerSession(authOptions)
    if(!session || !session.user){
    return NextResponse.json({error: "nota authorazied"}, {status: 400})
}
  const { name, email, phone, adress, userId } = await request.json();
try {
    await PrismaClient.customer.create{
       data: {
         name;
        email;
        phone;
        adress: adress ? adress : ""; //adress é opcional, caso nao tenha ele coloca string vazia para evitar erros com unfedined;
        userId: userId
       }
         return NextResponse.json({ message: "cliente cadastrado com sucesso"});
    }
} catch (err) {
    return NextResponse.json({èrror: "Failed to create new customer"}, {status:400})
}



}
