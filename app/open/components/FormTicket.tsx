import { Input } from "@/app/components/Input/Input";
import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import {useForm} from 'react-hook-form';


const schema = z.object({
     name: z.string().min(1, "O nome do chamado é obrigatório"),
     description: z.string().min(1, "descrição inválida")
})

type FormData = z.infer<typeof schema>
export function FormTicket() {
    const {register, handleSubmit, setValue, formState:{errors} } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    return (
        <form>
            <label>Nome do chamado</label>
            <Input 
            register={register}
            type="text"
            placeholder="Digite o nome do chamado"
            name="name"
            error={errors.name?.message}
            />
        </form>
    )
}
