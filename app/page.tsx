"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import noContentImage from "../public/dashboard-nocontent.png";
export default function Home() {
  const [hasContent, setHasContent] = useState<boolean>();
  useEffect(() => {
    setHasContent(false); // só executa uma vez após o componente montar
  }, []);

  return hasContent ? (
    <div>Oi migos</div>
  ) : (
    <div className=" w-screen items-center flex justify-center">
      <Image alt="nao há chamados" src={noContentImage} quality={100} />
    </div>
  );
}
