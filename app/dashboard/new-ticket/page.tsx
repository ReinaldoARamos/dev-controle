import { Input } from "@/app/components/Input/Input";
import Link from "next/link";

export default function NewTicket() {
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
      <div className="flex flex-col gap-[22px]">
        <div>
          <h3 className="text-[16px] font-medium pb-[7px]">Nome do Chamado</h3>
          <Input placeholderText="Digite o nome..." key={"Digite o nome..."} />
        </div>

        <div>
          <h3 className="text-[16px] font-medium pb-[7px]">Nome do Chamado</h3>
          <textarea
            placeholder="Descreva o problema que está ocorrendo..."
            className="text-slate-800 px-3.5 py-3 w-full border-2 resize-none border-slate-400 active:border-slate-800 transition duration-300 rounded-[5px] hover:cursor-text"
          ></textarea>
        </div>

        <div>
          <h3 className="text-[16px] font-medium pb-[7px]">
            Selecione seu cliente
          </h3>
          <Input placeholderText="Selecione seu cliente..." key={"Digite o nome..."} />
        </div>
        <button className="bg-blue-500 text-white py-[10px] text-[16px] font-bold text-center w-full transition-all duration-300 hover:cursor-pointer hover:bg-blue-700 rounded-sm">
          Cadastrar
        </button>
      </div>
    </div>
  );
}
