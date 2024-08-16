import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { labelText, inputPlaceholder, type, name },
  ref
) {
  return (
    <>
      <label className="gap-1 text-sm text-neutral-300 flex flex-col">
        {labelText}
        <input
          className="bg-transparent placeholder:text-neutral-500 p-2 rounded-md focus-visible:outline focus-visible:outline-sky-300 outline-2 border-2 border-neutral-700"
          type={type}
          placeholder={inputPlaceholder}
          name={name}
          ref={ref}
          autoComplete="on"
        ></input>
      </label>
    </>
  );
});

export default Input;
