"use client";

import { ReactNode } from "react";

import { SessionProvider } from "next-auth/react";

type Props = {
  children: ReactNode;
};

const Providers: React.FC<Props> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Providers;
