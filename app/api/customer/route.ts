import { authOptions } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import PrismaClient from "../../lib/prisma";
import { ok } from "assert";

export async function DELETE(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ error: "Not authorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const UserId = searchParams.get("id");

  try {
    await PrismaClient.customer.delete({
      where: {
        id: UserId as string,
      },
    });
    return NextResponse.json({ message: "cliente deletado" });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "failed do delete cliente" },
      { status: 400 }
    );
  }
}
export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({ error: "Not authorized" }, { status: 401 });
  }

  const { name, email, phone, adress, UserId } = await request.json();

  try {
    await PrismaClient.customer.create({
      data: {
        name,
        email,
        phone,
        adress: adress ?? "", // <- Agora funciona corretamente
        UserId, // <- Certifique-se de usar `userId`, conforme seu modelo
      },
    });

    return NextResponse.json({ message: "Cliente cadastrado com sucesso" });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to create new customer" },
      { status: 400 }
    );
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url); //URL para pegar o email
  const customerEmail = searchParams.get("email"); //get no email que sera enviado como parametro na URL

  if(!customerEmail || customerEmail === "") {
    return NextResponse.json({ error: "Customer nod found" }, { status: 400 });
  }
  try {
    const customer = await PrismaClient.customer.findFirst({
      where: {
        email: customerEmail as string,
      },
    });
  } catch (error) {
    return NextResponse.json({ error: "Customer nod found" }, { status: 400 });
  }

  return NextResponse.json({ message: "RECEBIDO" });
}
