// Importações de tipos e componentes necessários
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "@radix-ui/themes/styles.css";


import { Theme } from "@radix-ui/themes";
import { Header } from "../components/Header/Header";
import DashBoardMenu from "../components/DashBoardMenu/DashBoard";

// Configuração da fonte Inter (você pode reutilizar essa configuração no layout global se quiser)
const geistSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

// Metadados específicos desta rota, se quiser
export const metadata: Metadata = {
  title: "Clientes | Dev Controle",
  description: "Área de clientes da aplicação Dev Controle",
};

// 🔧 Correção principal: função renomeada de RootLayout para ClientesLayout
// 🔧 Correção adicional: removido o <html> e <body>, pois isso já está no layout global (app/layout.tsx)
export default function ClientesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Theme> 
      {/* O Header global já está no layout raiz, então só o menu lateral entra aqui */}
      <DashBoardMenu />
      <main className={`${geistSans.variable} antialiased`}>
        {children}
      </main>
    </Theme>
  );
}
