import { authOptions } from "@/app/lib/auth";
import PrismaClient from "../../lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";






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
        status: "ABERTO",
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
 /*
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
    return NextResponse.json(
      { error: "TIcket nao encontrado" },
      { status: 400 }
    );
  }

  try {
    await PrismaClient.ticket.update({
      where: {
        id: id as string,
      },
      data: {
        status: "ABERTO",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Nao foi possível atualizar o status do ticket" },
      { status: 400 }
    );
  }
    return NextResponse.json({ message: "Cadastrado" });
}
*/