import NextAuth  from 'next-auth'

import { authOptions } from '@/app/lib/auth'

const handler = NextAuth;

export {handler as GET, handler as POST}