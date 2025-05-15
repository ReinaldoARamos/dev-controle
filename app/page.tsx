"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import noContentImage from "../public/dashboard-nocontent.png";
import { Tickets } from "./components/Tickets/Tickets";
export default function Home() {
  const [hasContent, setHasContent] = useState<boolean>();
  useEffect(() => {
    setHasContent(true); // só executa uma vez após o componente montar
  }, []);

  return hasContent ? (
    <div className="px-6 pt-9 text-black">
      <header className="w-full rounded-lg bg-gray-900  text-white">
        <div className="flex gap-6 py-3 pl-6">
          <span>Chamados</span>
          <span>Clientes</span>
        </div>
      </header>
      <h1 className="flex w-full justify-between bg-transparent pb-7 pt-[38px]">
        <span className="text-4xl font-bold">Chamados</span>
        <button className="rounded-sm bg-blue-500 px-8 py-[6px] font-medium leading-[150%] text-white">
          Cadastrar
        </button>
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
