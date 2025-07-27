import { authOptions } from "@/app/lib/auth";
import { error } from "console";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import PrismaClient from "../../lib/prisma";

export async function PATCH(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ error: "not authorized" }, { status: 401 });
  }

  const { id } = await request.json();

  const findTicket = await PrismaClient.ticket.findFirst({
    where: {
      id: id as string,
    },
  });

  if (!findTicket) {
    return NextResponse.json({ error: "ticket not found" }, { status: 400 });
  }

  try {
    await PrismaClient.ticket.update({
      where: {
        id: id as string,
      },
      data: {
        status: "FECHADO",
      },
    });

    return NextResponse.json({ message: "Ticket atualizado com sucesso" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to update ticket" },
      { status: 400 }
    );
  }
}

export async function POST(request: Request) {
  const { description, name, customerId } = await request.json();

  if(!name || !description || !customerId) {
    return NextResponse.json({error: "erro ao cadastrar o chamado"}, {status: 400})
  }
 try {
         await PrismaClient.ticket.create({
            data: {
                name : name,
                description : description,
                customerId : customerId,
                status: "ABERTO"
            }
         })
 } catch (error) {
return NextResponse.json({error: "erro ao cadastrar o chamado"}, {status: 400})
 }
  return NextResponse.json({ message: "Cadastrado" });
}
