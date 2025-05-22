import { Button, Dialog, Text } from "@radix-ui/themes";
import { FileText, Folder, Trash } from "lucide-react";

export function Tickets() {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4 text-[16px] font-medium ">
      <Dialog.Root>
        <div className="w-1/3 truncate">Fulano da Silva</div>
        <div className="w-1/4">12/05/2025</div>
        <div className="w-1/4 uppercase  text-black">
          <span className="rounded-sm bg-green-500 px-4 py-[3px]">Aberto</span>
        </div>
        <div className="w-[50px] text-right">
          <div className="flex gap-2.5">
            <Trash size={24} className="text-red-500" />
            <Dialog.Trigger>
              <FileText size={24} className="text-blue-600" />
            </Dialog.Trigger>
          </div>
        </div>

        <Dialog.Content maxWidth="787px">
        <Dialog.Title className="font-bold text-2xl text-black w-full flex ">
  <span className="flex justify-between w-full">
    <span>Detalhes do chamado</span>
   <Dialog.Close>
    <button className="text-xs hover:bg-red-700 transition duration-200 hover:cursor-pointer text-white  px-4 py-1.5 bg-red-500 rounded-sm">Fechar</button>
    </Dialog.Close> 
  </span>
</Dialog.Title>

          <Dialog.Description size="2" className="pt-4 flex flex-col">
            <span className="pb-2 text-[16px]">
              <b>Nome: </b> Problema de computador
            </span>
            <span className="font-bold text-[16px] pt-2 pb-2">Descrição: </span>
            <Text>
              Lorem ipsum dolor sit amet consectetur. Duis justo nec turpis
              iaculis in vestibulum. Scelerisque dictumst arcu aliquam lectus
              orci blandit. Commodo sit id odio id tincidunt vestibulum.a
            </Text>
          </Dialog.Description>

          <div className="w-full px-4 h-[1px] border border-slate-300 my-5" />
          <div className="font-bold text-lg text-black leading-normal pb-3.5">
            Detalhe do cliente
          </div>
          <div className="flex flex-col text-[16px] gap-2">
            <span>
              <b>Nome: </b>
              Mercado Silva
            </span>
            <span>
              <b>Telefone: </b>
              {`(48)9 9124-1234`}
            </span>{" "}
            <span>
              <b>email: </b>
              Teste@teste.com.br
            </span>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
}
