import React, { ReactNode, useState } from "react";
import { Header } from "@/components/Header";
import { Head } from "@/components/Head";
import { Footer } from "@/components/Footer";

interface Props {
  children?: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Head />
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};
