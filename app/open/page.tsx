"use client";
import { Input } from "../components/Input/Input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FormTicket } from "./components/FormTicket";
import { api } from "../lib/api";
const schema = z.object({
  email: z
    .string()
    .email("Digite o email do cliente para localizar")
    .min(1, "O campo email é obrigatório"),
});

interface CustomerDataInfo {
  name: string;
  id: string;
}
type FormData = z.infer<typeof schema>;
export default function OpenTicket() {
  const [customer, setCustomer] = useState<CustomerDataInfo | null>(null);

 

  function handleClearCustomer() {
    setCustomer(null);
    setValue("email", "");
  }


  


  const {
    register,
    setValue,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function handleSearchCustomer(data: FormData) { 

    
      const response = await api.get("api/customer", {
        params: {
          email: data.email //parametro passado pela rota
        }
      })
    if(response.data === null) {
      setError("email", {type: "custom", message: "Ops, cliente nao foi encontrado"})
      return
    }
 setCustomer({
      id: response.data.id,
      name: response.data.name
     })



  }
  return (
    <div className="w-full max-w-2xl mx-auto px-2 ">
      <h1 className="font-bold text-3xl text-center mt-24">Abrir Chamado</h1>
      <main className="flex flex-col mt-4 mb-2">
        {customer ? (
          <div className="bg-slate-200 py-6 px-4  border-slate-200 rounded border-2 flex items-center justify-between">
            <p className="text-lg">
              <strong>Cliente selecionado: </strong>
              {customer.name}
            </p>
            <button
              className=" h-11 hover:cursor-pointer px-2 flex items-center justify-center rounded "
             onClick={handleClearCustomer}
            >
              <X size={30} color="red" />
            </button>
          </div>
        ) : (
          <form className="bg-slate-200 py-6 px-2  border-slate-200 rounded border-2 " onSubmit={handleSubmit(handleSearchCustomer)}>
            <div className="flex flex-col gap-3">
              <Input
                name="email"
                placeholder="DIgite o email do cliente..."
                type="text"
                error={errors.email?.message}
                register={register}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:cursor-pointer hover:bg-blue-700 transition-all duration-300  flex flex-row gap-3 px-2 h-11 w-full mt-2 items-center justify-center text-white font-bold rounded"
            >
              Procurar Cliente
              <Search size={24} color="white" />
            </button>
          </form>
        )}

        {customer != null && <FormTicket />}
      </main>
    </div>
  );
}
