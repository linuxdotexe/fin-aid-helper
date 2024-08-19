export default function Button({ className, children, ...props }) {
  return (
    <button
      className={`border-2 border-neutral-400 enabled:hover:bg-sky-300 enabled:hover:text-black w-fit px-4 py-2 rounded-full text-neutral-300 font-bold enabled:hover:border-sky-900 disabled:opacity-20 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
