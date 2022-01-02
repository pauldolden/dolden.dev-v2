import React from "react";

interface Props {}

export const Footer = (props: Props) => {
  const date = new Date();
  return (
    <footer className="bg-pinkop flex">
      <div className="lg:container mx-auto py-5 flex flex-col lg:flex-row items-center flex-1 justify-between">
        <p className="text-white font-extrabold text-center">
          &copy; Paul Dolden, {date.getFullYear()}.
        </p>
        <p className="text-white font-extrabold text-center">
          Sponsored by the colour pink.
        </p>
        <p className="text-white font-extrabold text-center">
          Built by Paul Dolden.
        </p>
      </div>
    </footer>
  );
};
