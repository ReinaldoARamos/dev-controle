"use client";
import { Input } from "@/app/components/Input/Input";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/app/lib/api";
import { email } from "zod/v4-mini";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";

   const session = await getServerSession(authOptions);
   const userId : string = session?.user.id
const schema = z.object({
  //configuração do schema do zod para campos e suas validações
  name: z.string().min(1, "o campo nome é obrigatório"),
  email: z
    .string()
    .email("Digite um e-mail válido")
    .min(1, "o e-mail é obrigatório"),
  phone: z.string().refine(
    (value) => {
      return (
        /^(?:\(\d{2}\)\s?)?\d{9}$/.test(value) ||
        /^d{2}\s\d{9}$/.test(value) ||
        /^\d{11}$/.test(value)
      ); //regex para deixar o numero de telefone em um padrão recebendo o valor do campo na função anonioma
    },
    {
      message: "o numero de telefone deve estar (DDD) 999999999",
    }
  ),
  adress: z.string(),
});

type FormData = z.infer<typeof schema>;
export default function NewCliente() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    //passando o formData, que tem a tipagem com base no schema
    resolver: zodResolver(schema), //instanceamois o useform para colocar o zodresolver passando o schema
  });

  function handleRegister(data: FormData) {
    //tipagem do objeto do formulario e suas propriedades
    const respose = api.post("api/customer", {
      name: data.name,
      phone: data.phone,
      email: data.email,
      UserId: userId //const com tipagem feito acima
    });
  }
  return (
    <form className="py-12 px-6" onSubmit={handleSubmit(handleRegister)}>
      <header className="flex gap-3.5  items-center pb-9">
        <Link href={"/clientes"}>
          <button className="text-[16px] transition-all duration-300 hover:cursor-pointer hover:bg-gray-700 bg-gray-900 rounded-sm text-white  font-medium px-4  py-1.5">
            Voltar
          </button>
        </Link>
        <span className="text-[36px] font-bold">Novo Cliente</span>
      </header>
      <div className="flex flex-col gap-[22px]">
        <div>
          <h3 className="text-[16px] font-medium pb-[7px]">Nome do Cliente</h3>
          <Input
            name="name"
            placeholder="Digite o nome do cliente"
            type="text"
            error={errors.name?.message}
            register={register}
          />
        </div>

        <div className="flex flex-col gap-3 w-full ">
          <div className="flex gap-3">
            <div className="flex-1">
              <h3 className="text-[16px] font-medium pb-[7px]">Telefone</h3>
              <Input
                name="phone"
                placeholder="Digite o telefone Ex: (48) 991142456"
                type="text"
                error={errors.phone?.message}
                register={register}
              />
            </div>
            <div className="flex-1">
              <h3 className="text-[16px] font-medium pb-[7px]">Email</h3>
              <Input
                name="email"
                placeholder="Digite o email"
                type="text"
                error={errors.name?.message}
                register={register}
              />
            </div>
          </div>

          <div className="w-full">
            <h3 className="text-[16px] font-medium pb-[7px]">Email</h3>
            <Input
              name="adress"
              placeholder="Digite o endereço do cliente"
              type="text"
              error={errors.adress?.message}
              register={register}
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-[10px] text-[16px] font-bold text-center w-full transition-all duration-300 hover:cursor-pointer hover:bg-blue-700 rounded-sm"
        >
          Cadastrar
        </button>
      </div>
    </form>
  );
}
//pagina de criaçãop de novo cliente
