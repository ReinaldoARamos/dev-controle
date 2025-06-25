'use client'
import { Input } from "@/app/components/Input/Input";
import Link from "next/link";
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
export default function NewCliente() {
  return (
    <form className="py-12 px-6">
      <header className="flex gap-3.5  items-center pb-9">
        <Link href={"/clientes"}>
          <button className="text-[16px] transition-all duration-300 hover:cursor-pointer hover:bg-gray-700 bg-gray-900 rounded-sm text-white  font-medium px-4  py-1.5">
            Voltar
          </button>
        </Link>
        <span className="text-[36px] font-bold">Novo Cliente</span>
      </header>
      <div className="flex flex-col gap-[22px]">
        <div>
          <h3 className="text-[16px] font-medium pb-[7px]">Nome do Cliente</h3>
          <Input placeholderText="Digite o nome..." key={"Digite o nome..."} />
        </div>
        
        <div className="flex gap-3 w-full ">
             <div className="w-full">
          <h3 className="text-[16px] font-medium pb-[7px]">Nome do Cliente</h3>
          <Input placeholderText="Digite o nome..." key={"Digite o nome..."} />
        </div>
           <div className="w-full">
          <h3 className="text-[16px] font-medium pb-[7px]">Nome do Cliente</h3>
          <Input placeholderText="Digite o nome..." key={"Digite o nome..."} />
        </div>
        </div>
         <button className="bg-blue-500 text-white py-[10px] text-[16px] font-bold text-center w-full transition-all duration-300 hover:cursor-pointer hover:bg-blue-700 rounded-sm">
          Cadastrar
        </button>
      </div>
    </form>
  );
}
