import { withAuth, NextRequestWithAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    console.log('------------middleware------------', request.nextUrl.pathname);
    if ((request.nextUrl.pathname === '/dashboard'  || request.nextUrl.pathname === '/employees') && request.nextauth?.token?.name === 'user') {
      return NextResponse.redirect(new URL('/mydashboard', request.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/mydashboard/:path*',
    '/employees/:path*',
  ],
};
