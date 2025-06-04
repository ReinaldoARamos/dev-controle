    'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function DashBoardMenu() {
  const pathname = usePathname()
const isActive = (path: string) => pathname.startsWith(path)


  return (
    <div className="px-6 pt-9">
      <header className="w-full rounded-lg bg-gray-900 text-slate-200">
        <div className="flex gap-6 py-3 pl-6">
          <Link href="/dashboard">
            <span
              className={`border-b ${
                isActive('/dashboard')
                  ? 'text-white border-b-white'
                  : 'border-transparent hover:border-b-white hover:text-white cursor-pointer transition duration-300'
              }`}
            >
              Chamados
            </span>
          </Link>

          <Link href="/clientes">
            <span
              className={`border-b ${
                isActive('/clientes')
                  ? 'text-white border-b-white'
                  : 'border-transparent hover:border-b-white hover:text-white cursor-pointer transition duration-300'
              }`}
            >
              Clientes
            </span>
          </Link>
        </div>
      </header>
    </div>
  )
}
