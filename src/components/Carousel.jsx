import { useState } from "react";
import Button from "./Button";

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
        <Button
          disabled={imageNum < 2}
          onClick={() => {
            handleClick(false);
          }}
        >
          Prev
        </Button>
        <Button
          disabled={imageNum > 8}
          onClick={() => {
            handleClick(true);
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
