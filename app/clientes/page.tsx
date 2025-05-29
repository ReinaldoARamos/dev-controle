import { ClientCard } from "../components/ClientsCard/ClientCard";

export default function Clientes() {
    return (
       <div className="px-6  text-black">
              
            <h1 className="flex w-full justify-between bg-transparent pb-7 pt-[38px]">
              <span className="text-4xl font-bold">Meus clientes</span>
              <button className="rounded-sm bg-blue-500 px-8 py-[6px] font-medium leading-[150%] text-white transition-all duration-300 hover:bg-blue-400 hover:cursor-pointer">
                Novo cliente
              </button>
            </h1>
           
           <div className="flex  gap-3.5">
            <ClientCard />
              <ClientCard />
                <ClientCard />
                     <ClientCard />
                     
                
            
           </div>
          </div>
    )
}