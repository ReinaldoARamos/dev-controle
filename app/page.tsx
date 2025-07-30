import Image from "next/image";
import noContentImage from '../public/dashboard-nocontent.png'
import Link from "next/link";
import {  Lock } from "lucide-react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";

export default async function Home() {

    
const session = await getServerSession(authOptions);
//ts-
if (session ) {
    redirect("/dashboard");
}
    return (
        <div className=" mt-44 flex   items-center justify-center flex-col gap-2.5">
            <Image alt="nao há chamados" src={noContentImage} quality={100} />
         
                <div className="rounded-sm text-lg items-center flex gap-3 bg-blue-500 px-8 py-[6px] font-medium leading-[150%] text-white transition-all duration-300 hover:bg-blue-400 hover:cursor-pointer" >
                    Faça seu login clicando no ícone  <Lock size={18} color="#FFFF" />
                </div>
           
        </div>
    )
}