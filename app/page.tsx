import Image from "next/image";
import noContentImage from '../public/dashboard-nocontent.png'
import Link from "next/link";

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
        <div className=" mt-44 flex w-screen  items-center justify-center flex-col gap-2.5">
            <Image alt="nao há chamados" src={noContentImage} quality={100} />
            <Link href={"dashboard/new-ticket"}>
                <button className="rounded-sm bg-blue-500 px-8 py-[6px] font-medium leading-[150%] text-white transition-all duration-300 hover:bg-blue-400 hover:cursor-pointer">
                    Cadastrar
                </button>
            </Link>
        </div>
    )
}