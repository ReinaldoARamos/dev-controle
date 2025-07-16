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
  console.log("id do cliente:", UserId);
  return NextResponse.json({ ok: true });
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
