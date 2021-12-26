import React from "react";
import NextHead from "next/head";

interface Props {
  pageTitle?: string;
}

export const Head = ({ pageTitle }: Props) => {
  return (
    <NextHead>
      <title>dolden.dev</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Mr+Dafoe&display=swap"
        rel="stylesheet"
      />
    </NextHead>
  );
};
