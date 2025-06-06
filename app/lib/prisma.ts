import { PrismaClient } from "@prisma/client";

let prisma:  PrismaClient;

if(process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
} else {
     let globalwithprisma = global as typeof globalThis &  { 
        prisma: PrismaClient
     }

     if(!globalwithprisma) {
        globalwithprisma.prisma = new PrismaClient();
     }

     prisma = globalwithprisma.prisma;
}


export default prisma