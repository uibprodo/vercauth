import { Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';


export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { type: 'text' },
        password: { type: 'password' },
      },
      // @ts-ignore
      async authorize(credentials) {
        try {
          if(credentials?.username === 'admin' && credentials?.password === 'admin') {
            return {
                name: 'admin',
                email: 'admin@admin.com'
            }
          } else {
            return {
                name: 'user',
                email: 'user@user.com'
            }
          }
        } catch (error: any) {
          throw Error(error?.response.data.error_description);
        }
      },
    }),
  ],
  callbacks: {
    async redirect() {
      return '/';
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      // console.log('session', session);
      // console.log('token', token);
      if (session.user) {
        session.user.name = token.name;
        session.user.email = token.email;
      }
      return session;
    },
    async jwt({ token, user, account }: { token: JWT; user: any; account: any }) {
      if (account) {
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
  },
  pages: {
    signIn: '/',
    error: '/',
  },
};

