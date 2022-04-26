import React, { cloneElement, Children, useRef } from "react";
import clsx from "clsx";

export function RadioGroup({ id, label, children }) {
  return (
    <fieldset className="flex flex-col gap-2">
      <legend className=" pb-2 font-bold text-cyan-label">{label}</legend>
      <div className="grid grid-cols-2 gap-4">
        {Children.map(children, (child) => cloneElement(child, { name: id }))}
      </div>
    </fieldset>
  );
}
export function Radio({ label, value, name, custom, checked }) {
  const ref = useRef(null);
  function onFocus() {
    ref.current?.focus();
  }
  return (
    <div>
      <input
        type="radio"
        name={name}
        id={value}
        value={value}
        className="peer sr-only"
        onChange={custom && onFocus}
        defaultChecked={checked}
      />
      <label
        htmlFor={value}
        className={clsx(
          "text-center text-2xl font-bold ",
          "block w-full rounded  py-3",
          custom
            ? "peer-checked:hidden"
            : "peer-checked:bg-cyan-light peer-checked:text-cyan-text",
          custom
            ? "bg-cyan-text-field text-cyan-text-light"
            : "bg-cyan-darker text-white"
        )}
      >
        {label}
      </label>
      {custom && (
        <div className="hidden flex-col gap-2 peer-checked:flex">
          <label id="custom" className="font-bold text-cyan-label"></label>
          <div className="relative flex items-center">
            <input
              type="number"
              ref={ref}
              id="custom"
              name="custom"
              className={clsx(
                "w-full bg-cyan-text-field p-2",
                "  text-right text-2xl font-bold text-cyan-text",
                "outline-none ring-cyan-focus focus:ring"
              )}
            />
          </div>
        </div>
      )}
    </div>
  );
}
