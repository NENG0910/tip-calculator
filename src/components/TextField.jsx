import React, { cloneElement } from "react";
import clsx from "clsx";

export function TextField({ id, label, icon, value, min }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className=" font-bold text-cyan-label">
        {label}
      </label>
      <div className="relative flex items-center">
        <input
          type="number"
          id={id}
          name={id}
          defaultValue={value}
          min={min}
          className={clsx(
            "w-full bg-cyan-text-field p-2",
            "  text-right text-2xl font-bold text-cyan-text",
            "outline-none ring-cyan-focus focus:ring"
          )}
        />
        {icon && cloneElement(icon, { className: "absolute mx-4 my-2 w-4" })}
      </div>
    </div>
  );
}
