import React from "react";

interface Props {}

export const Footer = (props: Props) => {
  const date = new Date();
  return (
    <footer className="lg:container mx-auto py-5 flex justify-between">
      <p className="text-white font-extrabold">
        &copy; Paul Dolden, {date.getFullYear()}.
      </p>
      <p className="text-white font-extrabold">
        Built by Paul Dolden. Powered by Force of Will.
      </p>
    </footer>
  );
};
