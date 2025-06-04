"use client";

import { useState, useEffect } from "react";
import noContentImage from "../../public/dashboard-nocontent.png";
import Image from "next/image";
import Link from 'next/link'
import { Tickets } from "../components/Tickets/Tickets";
export default function Home() {
  const [hasContent, setHasContent] = useState<boolean>();
  useEffect(() => {
    setHasContent(true); // só executa uma vez após o componente montar
  }, []);

  return hasContent ? (
    <div className="px-6  text-black">
        
      <h1 className="flex w-full justify-between bg-transparent pb-7 pt-[38px]">
        <span className="text-4xl font-bold">Chamados</span>
      <Link href={'dashboard/new-ticket'}>
        <button className="rounded-sm bg-blue-500 px-8 py-[6px] font-medium leading-[150%] text-white transition-all duration-300 hover:bg-blue-400 hover:cursor-pointer">
          Cadastrar
        </button></Link>
      </h1>
      <div className="flex items-center justify-between px-4 py-2 text-[16px] font-medium uppercase">
        <div className="w-1/3">Clientes</div>
        <div className="w-1/4">Data Cadastro</div>
        <div className="w-1/4">Status</div>
        <div className="w-[50px] text-right">#</div>
      </div>
      <Tickets />
      <Tickets />
      <Tickets />
      <Tickets />
    </div>
  ) : (
    <div className=" mt-44 flex w-screen  items-center justify-center">
      <Image alt="nao há chamados" src={noContentImage} quality={100} />
    </div>
  );
}
