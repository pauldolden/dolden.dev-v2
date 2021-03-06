import React from "react";
import NextHead from "next/head";

interface Props {
  pageTitle?: string;
}

export const Head = ({ pageTitle }: Props) => {
  return (
    <NextHead>
      <title>dolden.dev</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" type="image/svg" href="/svg/favicon.svg"></link>
    </NextHead>
  );
};
