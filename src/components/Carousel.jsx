import { useState } from "react";

export default function Carousel() {
  const [imageNum, setImageNum] = useState(1);
  function handleClick(inc) {
    inc
      ? setImageNum((prev) => (prev += 1))
      : setImageNum((prev) => (prev -= 1));
  }
  let imageSrc = `/carousel/${imageNum}.png`;
  return (
    <div className="mt-1">
      <a
        href={imageSrc}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={imageSrc}
          width="full"
        ></img>
      </a>
      <div className="flex justify-between mt-4">
        <button
          disabled={imageNum < 2}
          onClick={() => {
            handleClick(false);
          }}
          className="border-2 border-neutral-400 enabled:hover:bg-sky-300 enabled:hover:text-black px-4 py-2 rounded-full text-neutral-300 font-bold enabled:hover:border-sky-900 disabled:opacity-20 disabled:cursor-not-allowed"
        >
          Prev
        </button>
        <button
          disabled={imageNum > 8}
          onClick={() => {
            handleClick(true);
          }}
          className="border-2 border-neutral-400 enabled:hover:bg-sky-300 enabled:hover:text-black px-4 py-2 rounded-full text-neutral-300 font-bold enabled:hover:border-sky-900 disabled:opacity-20 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
}
