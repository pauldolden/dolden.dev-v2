import React, { ReactNode, useState } from "react";
import { Header } from "@/components/Header";
import { Head } from "@/components/Head";
import { Footer } from "@/components/Footer";
import { elastic as Menu } from "react-burger-menu";

interface Props {
  children?: ReactNode;
}

export const Layout = ({ children }: Props) => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  return (
    <>
      <Head />

      <Header setToggleMenu={setToggleMobileMenu} />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};
