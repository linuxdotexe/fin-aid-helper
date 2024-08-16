import copy from "../assets/copy.svg";
export default function Answer({ children }) {
  return (
    <div className="flex flex-col gap-1">
      <button
        className="self-end"
        onClick={() => {
          navigator.clipboard.writeText(children);
        }}
      >
        <img
          src={copy}
          alt="copy icon"
          width={20}
        />
      </button>
      <p className="text-neutral-400">{children}</p>
    </div>
  );
}
