"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import noContentImage from "../public/dashboard-nocontent.png";
export default function Home() {
  const [hasContent, setHasContent] = useState<boolean>();
  useEffect(() => {
    setHasContent(true); // só executa uma vez após o componente montar
  }, []);

  return hasContent ? (
    <div className="text-black pt-9 px-6">
      <header className="w-full bg-gray-900 rounded-lg  text-white">
        <div className="flex gap-6 pl-6 py-3">
          <span>
            Chamados
          </span>
          <span>
            Chamados
          </span>
        </div>
      </header>
      
    
    </div>
  ) : (
    <div className=" w-screen items-center flex  mt-44 justify-center">
      <Image alt="nao há chamados" src={noContentImage} quality={100} />
    </div>
  );
}
