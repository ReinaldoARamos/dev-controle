"use client";
import Image from "next/image";
import Logo from "../../../public/DEV CONTROLE.png";
import { signIn, signOut, useSession } from "next-auth/react";
import { User, LogOut, LoaderIcon, Lock } from "lucide-react";
import Link from "next/link";
export function Header() {
  const { status, data } = useSession();

  async function handleLogin() {
    await signIn();
  }

  async function handleLogout() {
    await signOut();
  }

  return (
    <div className="text-black  bg-white border-[1px] border-slate-100 flex justify-between px-4  py-5">
      {status === "unauthenticated" && (
         <Link href={"/"}>
          <div
            className="font-bold text-2xl leading-relaxed
"
          >
            {" "}
            <b className="text-blue-600">DEV</b> CONTROLE{" "}
          </div>
        </Link>
      )}

      {status === "authenticated" && (
        <Link href={"/dashboard"}>
          <div
            className="font-bold text-2xl leading-relaxed
"
          >
            {" "}
            <b className="text-blue-600">DEV</b> CONTROLE{" "}
          </div>
        </Link>
      )}

      {status === "loading" && (
        <button className="animate-spin">
          <LoaderIcon size={26} color="#475569" />
        </button>
      )}

      {status === "unauthenticated" && (
        <button
          className="hover:text-slate-800 transition duration-300 hover:cursor-pointer"
          onClick={handleLogin}
        >
          <Lock size={26} color="#475569" />
        </button>
      )}
      {status === "authenticated" && (
        <div className="flex gap-5 items-center text-[#475569]">
          <Link href={"/dashboard"}>
            {" "}
            <div className="cursor-pointer  hover:text-blue-600 transition duration-300">
              <User size={24} />
            </div>{" "}
          </Link>
          <button
            onClick={handleLogout}
            className="cursor-pointer hover:text-red-500 transition duration-300"
          >
            <LogOut size={24} />
          </button>
        </div>
      )}
    </div>
  );
}
