import { authOptions } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import PrismaClient from "../../lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";
export default async function NewTicket() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/");
  }

  const customers = await PrismaClient.customer.findMany({
    where: {
      UserId: session.user.id,
    },
  });
  return (
    <div className="py-12 px-6">
      <header className="flex gap-3.5  items-center pb-9">
        <Link href={"/dashboard"}>
          <button className="text-[16px] transition-all duration-300 hover:cursor-pointer hover:bg-gray-700 bg-gray-900 rounded-sm text-white  font-medium px-4  py-1.5">
            Voltar
          </button>
        </Link>
        <span className="text-[36px] font-bold">Novo Chamado</span>
      </header>
      <form className="flex flex-col gap-[22px]">
        <div>
          <h3 className="text-[16px] font-medium pb-[7px]">Nome do Chamado</h3>
          <input
            placeholder={"texto"}
            type="text"
            required
            className="text-slate-800 px-3.5 py-3 w-full border-2 border-slate-400 active:border-slate-800 transition duration-300 rounded-[5px] hover:cursor-text"
          />
        </div>

        <div>
          <h3 className="text-[16px] font-medium pb-[7px]">Nome do Chamado</h3>
          <textarea
            placeholder="Descreva o problema que está ocorrendo..."
            className="text-slate-800 px-3.5 py-3 w-full border-2 resize-none border-slate-400 active:border-slate-800 transition duration-300 rounded-[5px] hover:cursor-text"
          ></textarea>
        </div>

        {customers.length !== 0 && (
          <div>
            <h3 className="text-[16px] font-medium pb-[7px]">
              Selecione seu cliente
            </h3>
            <select className="text-slate-800 px-3.5 py-3 w-full border-2 resize-none border-slate-400 active:border-slate-800 transition duration-300 rounded-[5px] hover:cursor-text">
              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {customers.length === 0 && (
          <div className="flex gap-1 items-center text-center">
            <span>Voce nao possui nenhum cliente cadastrado</span>
            <Link
              href={"localhost:3000/clientes/new-clients"}
              className="text-blue-400"
            >
              <span>Cadastre agora</span>
            </Link>
          </div>
        )}
        <button  disabled={customers.length === 0} className="bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed  text-white py-[10px] text-[16px] font-bold text-center w-full transition-all duration-300 hover:cursor-pointer hover:bg-blue-700 rounded-sm">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
