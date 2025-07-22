import noContentImage from "../../public/dashboard-nocontent.png";
import Image from "next/image";
import Link from "next/link";
import { Tickets } from "../components/Tickets/Tickets";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import { redirect } from "next/navigation";
import PrismaClient from "../lib/prisma";
interface HomeProps {
  hasContent: boolean;
}
export default async function Home({ hasContent }: HomeProps) {
  const session = await getServerSession(authOptions);

  const tickets = await PrismaClient.ticket.findMany({
    where: {
      UserId: session?.user.id,
      status: "ABERTO",
    },
    include: {
      customer: true,
    },
  });

  hasContent = true;
  return tickets.length != 0 ? (
    <div className="px-6  text-black">
      <h1 className="flex w-full justify-between bg-transparent pb-7 pt-[38px]">
        <span className="text-4xl font-bold">Chamados</span>
        <Link href={"dashboard/new-ticket"}>
          <button className="rounded-sm bg-blue-500 px-8 py-[6px] font-medium leading-[150%] text-white transition-all duration-300 hover:bg-blue-400 hover:cursor-pointer">
            Cadastrar
          </button>
        </Link>
      </h1>
      <div className="flex items-center justify-between px-4 py-2 text-[16px] font-medium uppercase">
        <div className="w-1/3">Clientes</div>
        <div className="w-1/4 hidden sm:flex">Data Cadastro</div>
        <div className="w-1/4">Status</div>
        <div className="w-[50px] text-right">#</div>
      </div>

      {tickets.map((ticket) => (
        <Tickets key={ticket.id} tickets={ticket} customer={ticket.customer} />
      ))}
    </div>
  ) : (
    <div className=" mt-44 flex w-screen  items-center justify-center flex-col gap-2.5">
      <Image alt="nao há chamados" src={noContentImage} quality={100} />
      <Link href={"dashboard/new-ticket"}>
        <button className="rounded-sm bg-blue-500 px-8 py-[6px] font-medium leading-[150%] text-white transition-all duration-300 hover:bg-blue-400 hover:cursor-pointer">
          Cadastrar
        </button>
      </Link>
    </div>
  );
}
