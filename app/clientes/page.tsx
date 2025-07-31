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
          <header className="flex flex-col lg:flex-row sm:flex-col gap-3.5  lg:items-center pb-9 pt-[38px]">
        <span className="lg:text-4xl  text-lg font-bold">Meus clientes</span>
        <Link href={"/clientes/new-clients"}>
          <button className="rounded-sm bg-blue-500 px-8 py-[6px] font-medium leading-[150%] text-white transition-all duration-300 hover:bg-blue-400 hover:cursor-pointer">
            Novo cliente
          </button>
        </Link>
      </header>

      <div className="grid grid-cols lg:grid-cols-5 gap-3.5">
      {custumer.map(custumer => (
          <ClientCard key={custumer.id} custumer={custumer}  />
      ))}
      
      </div>
{custumer.length === 0 &&(
  <h1>Voce ainda não possui nenhum cliente</h1>
)}
    </div>
  );
}
