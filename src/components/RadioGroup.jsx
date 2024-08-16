import { forwardRef } from "react";

const RadioGroup = forwardRef(function RadioGroup(
  { name, options, labelText },
  ref
) {
  return (
    <div>
      <label className="text-sm text-neutral-300">{labelText}</label>
      {options.map((option, index) => (
        <label
          key={option}
          className="flex gap-2 shrink-0 mt-1 items-center relative"
        >
          <input
            type="radio"
            id={`${name}-${index}`}
            name={name}
            className="peer mt-[0.5px] appearance-none w-4 h-4 border-2 border-sky-300/60 rounded-full
            focus-visible:outline-none focus-visible:ring-offset-0 focus-visible:ring-2 focus-visible:ring-sky-300"
            value={option}
            defaultChecked={index === 1}
            ref={index === 0 ? ref : null}
          />
          <span className="pointer-events-none w-2 h-2 peer-checked:bg-sky-300 rounded-full ml-1 absolute" />
          <span
            htmlFor={`${name}-${index}`}
            className="text-base text-neutral-100"
          >
            {option}
          </span>
        </label>
      ))}
    </div>
  );
});

export default RadioGroup;
