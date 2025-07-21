import { authOptions } from "@/app/lib/auth";
import { error } from "console";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import PrismaClient from "../../lib/prisma";


export async function PATCH(request: Request) {
const session = await getServerSession(authOptions)

if(!session || !session.user){
    return NextResponse.json({error: "not authorized"}, {status: 401})
}

const { id} = await request.json()

const findTicket = await PrismaClient.ticket.findFirst({
    where: {
        id: id as string
    }
})

console.log(findTicket)

return NextResponse.json({ message: "teste chamado" });

}