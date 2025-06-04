interface InputProps {
    placeholderText: string
}

export function Input({placeholderText} : InputProps) {
    return (
         <input
            type="text"
            placeholder={placeholderText}
            className="text-slate-800 px-3.5 py-3 w-full border-2 border-slate-400 active:border-slate-800 transition duration-300 rounded-[5px] hover:cursor-text"
          />
    )
}