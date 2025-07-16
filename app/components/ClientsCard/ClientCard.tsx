"use client";
import { api } from "@/app/lib/api";
import { CustumerProps } from "../../utils/custumer.type";
import { useRouter } from "next/navigation";
export function ClientCard({ custumer }: { custumer: CustumerProps }) {
  async function handleDeleteUser(idUser: string) {

    try {
      const response = await api.delete("api/customer", {
        params: {
          id: custumer.id,
        },
      });

      console.log(response.data);
      router.refresh();
    } catch (error) {}
  }

      const router = useRouter();
  return (
    <div className="flex flex-col bg-slate-100 border text-[16px] border-slate-300 rounded-sm pl-2 p-[8.5px] gap-2.5">
      <span>
        <b>Nome: </b>
        {custumer.name}
      </span>
      <span>
        <b>Telefone: </b>
        {custumer.phone}
      </span>
      <span>
        <b>email: </b>
        {custumer.email}
      </span>
      <button
        onClick={() => handleDeleteUser(custumer.id)}
        className=" text-sm bg-red-500 transition-all duration-300 hover:cursor-pointer rounded-sm text-white hover:font-bold hover:bg-red-700 px-3.5 w-21"
      >
        Deletar
      </button>
    </div>
  );
}
