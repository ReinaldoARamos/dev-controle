"use client";
import { api } from "@/app/lib/api";
import { CustumerProps } from "@/app/utils/custumer.type";
import { TicketsProps } from "@/app/utils/tickets.type";
import { Button, Dialog, Text } from "@radix-ui/themes";
import { FileText, Folder, Check, RotateCcw } from "lucide-react";
import { useRouter } from "next/navigation";
interface TIcketItemProps {
  tickets: TicketsProps;
  customer: CustumerProps | null;
}
export function Tickets({ customer, tickets }: TIcketItemProps) {
  const router = useRouter();
  async function handleCloseTicket() {
    try {
      const response = await api.patch("api/ticket", {
        id: tickets.id,
      });

      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleReopenTicket() {
    try {
      const response = await api.patch("api/openticket", {
        id: tickets.id,
      });

      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div
      className="flex items-center justify-between border-b border-gray-200 px-4 py-4 text-[16px] font-medium last:border-b-0"
      role="table"
    >
      <Dialog.Root>
        <div className="w-1/3 truncate">{customer?.name}</div>
        <div className="w-1/4  hidden sm:flex">
          {tickets.created_at?.toLocaleDateString("pt-br")}
        </div>
        {tickets.status === "ABERTO" ? (
          <div className="lg:w-1/4 lg:uppercase lg:text-lg text-sm text-black">
            <span className="rounded-sm lowercase bg-green-500 px-4 py-[3px]">
              {tickets?.status}
            </span>
          </div>
        ) : (
  <div className="lg:w-1/4 lg:uppercase lg:text-lg text-sm text-black">
        <span className="rounded-sm lowercase bg-red-500 px-4 py-[3px]">
              {tickets?.status}
            </span>
          </div>
        )}
        <div className="w-[50px] text-right">
          <div className="flex gap-2.5">
            {tickets.status === "ABERTO" ? (
              <Check
                size={24}
                className="text-green-500 transition-all  hover:cursor-pointer duration-300 hover:text-red-800"
                onClick={handleCloseTicket}
              />
            ) : (
              <RotateCcw
                size={24}
                className="text-green-500 transition-all  hover:cursor-pointer duration-300 hover:text-red-800"
                onClick={handleReopenTicket}
              />
            )}
            <Dialog.Trigger>
              <FileText
                size={24}
                className="text-blue-600 hover:cursor-pointer transition-all duration-300 hover:text-blue-800"
              />
            </Dialog.Trigger>
          </div>
        </div>

        <Dialog.Content maxWidth="787px">
          <Dialog.Title className="font-bold text-2xl text-black w-full flex ">
            <span className="flex justify-between w-full">
              <span>Detalhes do chamado</span>
              <Dialog.Close>
                <button className="text-xs hover:bg-red-700 transition duration-200 hover:cursor-pointer outline-0 text-white  px-4 py-1.5 bg-red-500 rounded-sm">
                  Fechar
                </button>
              </Dialog.Close>
            </span>
          </Dialog.Title>

          <Dialog.Description size="2" className="pt-4 flex flex-col">
            <span className="pb-2 text-[16px]">
              <b>Nome: </b> {tickets.name}
            </span>
            <span className="font-bold text-[16px] pt-2 pb-2">Descrição: </span>
            <Text>{tickets.description}</Text>
          </Dialog.Description>

          <div className="w-full px-4 h-[1px] border border-slate-300 my-5" />
          <div className="font-bold text-lg text-black leading-normal pb-3.5">
            Detalhe do cliente
          </div>
          <div className="flex flex-col text-[16px] gap-2">
            <span>
              <b>Nome: </b>
              {customer?.name}
            </span>
            <span>
              <b>Telefone: </b>
              {customer?.phone}
            </span>{" "}
            <span>
              <b>email: </b>
              {customer?.email}
            </span>
            {customer?.adress ? (
              <span>
                <b>Endereço: </b>
                {customer?.adress}
              </span>
            ) : (
              <></>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
}
