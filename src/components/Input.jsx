import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { labelText, inputPlaceholder, type },
  ref
) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-neutral-300">{labelText}</label>
      <input
        className="bg-transparent placeholder:text-neutral-500 p-2 rounded-md focus-visible:outline focus-visible:outline-sky-300 outline-2 border-2 border-neutral-700"
        type={type}
        placeholder={inputPlaceholder}
        ref={ref}
      ></input>
    </div>
  );
});

export default Input;
