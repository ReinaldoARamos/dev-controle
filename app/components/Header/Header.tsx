import Image from "next/image";
import Logo from "../../../public/DEV CONTROLE.png";
export function Header() {
  return (
    <div className="text-black flex justify-between px-4 mb-44 py-5">
      <div
        className="font-bold text-2xl leading-relaxed
"
      >
        {" "}
        <b className="text-blue-600">DEV</b> CONTROLE{" "}
      </div>
      <div className="flex gap-[3px]">
        <div>Perfil</div>
        <div>Sair</div>
      </div>
    </div>
  );
}
