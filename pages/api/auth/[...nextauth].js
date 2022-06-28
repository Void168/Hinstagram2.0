import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
require('dotenv').config()

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  page: {
    signIn: 'auth/signin',
  },
  callback: {
    async session({ session, token, user }) {
      session.user.username = session.user.name
        .split('')
        .join('')
        .toLocaleLowerCase()
      session.user.uid = token.sub
      return session
    },
  },
})
