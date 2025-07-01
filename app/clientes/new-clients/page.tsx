import { Input } from "@/app/components/Input/Input";
import Link from "next/link";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { FormClient } from "../component/ClientForm";

export default async function NewCliente() {
  const session = await getServerSession(authOptions);


  return <FormClient userId={session?.user.id} />;
}
//pagina de criaçãop de novo cliente
