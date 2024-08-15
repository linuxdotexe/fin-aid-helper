export default function Input({ labelText, inputPlaceholder, type }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-neutral-300">{labelText}</label>
      <input
        className="bg-transparent placeholder:text-neutral-400 p-2 rounded-md focus-visible:outline focus-visible:outline-sky-300 outline-2 border-2 border-sky-300/20"
        type={type}
        placeholder={inputPlaceholder}
      ></input>
    </div>
  );
}
