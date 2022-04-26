import React, { cloneElement } from "react";

export function DataField({ title, note, price }) {
  return (
    <div className="item-center flex justify-between">
      <div className="flex flex-col">
        <strong className="text-white">{title}</strong>
        <span className="text-sm text-cyan-label">{note}</span>
      </div>
      <p className="text-3xl text-cyan-light">{price}</p>
    </div>
  );
}
