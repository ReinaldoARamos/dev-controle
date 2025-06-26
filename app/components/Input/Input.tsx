'use client'
import { RegisterOptions, UseFormRegister } from "react-hook-form";

interface InputProps {
    type: string
    placeholder: string;
    name: string;
    register: UseFormRegister<any>; //hook form pede para tipar assim
    error?: string;
    rules? : RegisterOptions
}

export function Input({name, placeholder, register, type, rules, error} : InputProps) {
    return (
        <>
         <input
           id={name}
            placeholder={placeholder}
            type={type}
            {...register(name,rules )}
            className="text-slate-800 px-3.5 py-3 w-full border-2 border-slate-400 active:border-slate-800 transition duration-300 rounded-[5px] hover:cursor-text"
          />
          {error && <p className="text-red-500 my-1">{error}</p>}
          </>
    ) 
}