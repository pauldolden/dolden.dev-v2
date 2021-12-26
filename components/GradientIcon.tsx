import React, { cloneElement } from "react";

interface Props {
  from: string;
  to: string;
  mid?: string;
  icon: JSX.Element;
  name: string;
}

export const GradientIcon = ({ from, to, icon, mid, name }: Props) => {
  let id = Math.random().toString(36).substr(2, 5);

  return (
    <>
      <svg width="0" height="0">
        <linearGradient id={name} x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor={from} offset="0%" />
          {mid && <stop stopColor={mid} offset="50%" />}
          <stop stopColor={to} offset="100%" />
        </linearGradient>
      </svg>
      {cloneElement(icon, {
        style: { stroke: `url(#${name})`, fill: `url(#${name})` },
      })}
    </>
  );
};
