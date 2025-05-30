export function ClientCard() {
  return (
    <div className="flex flex-col bg-slate-100 border text-[16px] border-slate-300 rounded-sm pl-2 p-[8.5px] gap-2.5">
      <span>
        <b>Nome: </b>
        Lucas
      </span>
      <span>
        <b>Telefone: </b>
        {`(48)x xxxx-xxxx`}
      </span>
      <span>
        <b>email: </b>
        Teste@teste.com
      </span>
      <button className=" text-sm bg-red-500 transition-all duration-300 hover:cursor-pointer rounded-sm text-white hover:font-bold hover:bg-red-700 px-3.5 w-21">
        Deletar
      </button>
    </div>
  );
}
