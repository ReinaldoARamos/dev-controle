import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "../lib/auth";
import { redirect } from "next/navigation";
import PrismaClient from "../lib/prisma";
import TicketPieChart from "./components/pizzaGraphic";
import OpenTicket from "../open/page";
export default async function Profile() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    redirect("/");
  }

  const Opentickets = await PrismaClient.ticket.findMany({
    where: {
      status: "ABERTO",
      customer: {
        UserId: session?.user.id,
      },
    },
  });

  const ClosedTickets = await PrismaClient.ticket.findMany({
    where: {
      status: "FECHADO",
      customer: {
        UserId: session?.user.id,
      },
    },
  });

  const customers = await PrismaClient.customer.findMany({
    where: {
      UserId: session.user.id,
    },
  });

  const totalTickets = Opentickets.length + ClosedTickets.length

  const TicketsRatio = (ClosedTickets.length / totalTickets) * 100

  return (
    <div className=" w-full flex gap-2 items-center flex-col text-black     h-screen ">
      <div className="pt-8 ">
        <div className="items-center flex flex-col justify-center ">
          <Image
            alt=""
            //@ts-ignore
            src={session?.user?.image}
            width={144}
            height={144}
            className="rounded-full border-2 border-black"
          />
          <p className="font-bold mt-1 text-center text-2xl">
            {session?.user.name}
          </p>
        </div>
      <div className=" text-center text-black text-lg">
          <p>
          Chamados Abertos: <b>{Opentickets.length}</b>
        </p>
        <p>
          Chamados Encerrados: <b>{ClosedTickets.length}</b>
        </p>
        <p>
          Número de clientes: <b>{customers.length}</b>
        </p>
      </div>
      </div>
      <TicketPieChart
        openCount={Opentickets.length}
        closedCount={ClosedTickets.length}
      />

      <div className="pt-4 text-center text-black text-lg">Frequência de atendimento de chamados: { `${(TicketsRatio).toFixed(2)}%`}</div>
 {TicketsRatio > 90 ? (
  <div className="pt-4 text-center text-black text-lg">
    Seu desempenho é: <b className="font-bold text-lg text-green-600">Excelente</b>
  </div>
) : TicketsRatio > 70 ? (
  <div className="pt-4 text-center text-black text-lg">
    Seu desempenho é: <b className="font-bold text-lg text-green-400">Bom</b>
  </div>
) : TicketsRatio >= 50 ? (
  <div className="pt-4 text-center text-black text-lg">
    Seu desempenho é: <b className="font-bold text-lg text-yellow-400">Médio</b>
  </div>
) : (
  <div className="pt-4 text-center text-black text-lg">
    Seu desempenho é: <b className="font-bold text-lg text-red-600">Ruim</b>
  </div>
)}
    </div>
  );
}
