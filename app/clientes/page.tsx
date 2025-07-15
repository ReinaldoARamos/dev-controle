import Link from "next/link";
import { ClientCard } from "../components/ClientsCard/ClientCard";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../lib/auth";

import prismaClient from '../lib/prisma'
export default async function Clientes() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/dashboard");
  }

  const custumer = await prismaClient.customer.findMany({
    where: {
      UserId: session.user.id
    }
  })

  console.log(custumer)
  return (
    <div className="px-6  text-black">
      <h1 className="flex w-full justify-between bg-transparent pb-7 pt-[38px]">
        <span className="text-4xl font-bold">Meus clientes</span>
        <Link href={"/clientes/new-clients"}>
          <button className="rounded-sm bg-blue-500 px-8 py-[6px] font-medium leading-[150%] text-white transition-all duration-300 hover:bg-blue-400 hover:cursor-pointer">
            Novo cliente
          </button>
        </Link>
      </h1>

      <div className="grid grid-cols-5 gap-3.5">
      {custumer.map(custumer => (
          <ClientCard key={custumer.id} custumer={custumer}  />
      ))}
      
      </div>
    </div>
  );
}
