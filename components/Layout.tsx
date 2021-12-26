import React, { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Head } from "@/components/Head";

interface Props {
  children?: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Head />
      <Header />
      <main className="bg-forcefields-alt min-h-screen">{children}</main>
    </>
  );
};
