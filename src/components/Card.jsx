import React from "react";
import clsx from "clsx";

export function Card({ children, className }) {
  return <div className={clsx("  p-8 ", className)}>{children}</div>;
}
