import Image from "next/image";
import Logo from "../../../public/DEV CONTROLE.png";
import { User, LogOut} from 'lucide-react'
export function Header() {
  return (
    <div className="text-black  bg-white border-[1px] border-slate-100 flex justify-between px-4  py-5">
      <div
        className="font-bold text-2xl leading-relaxed
"
      >
        {" "}
        <b className="text-blue-600">DEV</b> CONTROLE{" "}
      </div>
      <div className="flex gap-5 text-[#475569]">
        <div className="cursor-pointer  hover:text-blue-600 transition duration-300"><User  size={24}/></div>
        <div className="cursor-pointer hover:text-red-500 transition duration-300"><LogOut  size={24}/></div>
      </div>
    </div>
  );
}
