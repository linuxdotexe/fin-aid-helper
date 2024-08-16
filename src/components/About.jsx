import Carousel from "./Carousel";

export default function About() {
  return (
    <div className="flex flex-col w-5/6 lg:w-1/3 gap-2 my-10 text-justify max-h-[88vh] pr-5 overflow-scroll overflow-x-hidden">
      <h2 className="text-2xl text-neutral-300 font-semibold">About</h2>
      <p className="text-neutral-400">
        The source of these answers is the very resourceful{" "}
        <a
          className="underline text-sky-300"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/abdelrahmaan/Financial-aid-on-coursera-"
        >
          repository by Abdulrahman Mohamed
        </a>
        . This has been incredibly helpful in getting me access to a few courses
        I otherwise would not have got. But I always faced a problem with having
        to edit the content the way I wanted it and I wished there was a simpler
        way to do it. Now that I have the time and resources, I made that
        simpler way. Hope a few others find this helpful too.
      </p>
      <h2 className="text-2xl text-neutral-300 font-semibold">Instructions</h2>
      <p className="text-neutral-400">
        Instructions are already available in the above mentioned repository,
        but that is five years old (at the time of writing this) and has not
        been updated since. So I thought, it doesn't hurt to do it again.
      </p>
      <Carousel />
      <h2 className="text-2xl text-neutral-300 font-semibold">
        A note on the answers
      </h2>
      <p className="text-neutral-400">
        The repository mentioned above has a lot of stars, so I assume it worked
        for a lot of people. It sure worked for me. In the screenshots given, I
        did not have to use the last answer provided by that repository. But I
        want to keep it there, in case someone encounters it.
      </p>
      <p className="text-neutral-400">
        I added a grammar correction options because I do not enjoy reading the
        original answers. But they do work, so the default is the bad grammar
        option.
      </p>
      <h2 className="text-2xl text-neutral-300 font-semibold">Contributing</h2>
      <p className="text-neutral-400">
        Feel free to contribute. This code is free and open-source. I just
        started learning React so I could use fresh eyes on the code to see how
        I'm doing. You can contribute through creating issues, PRs, or just code
        review and suggestions.
      </p>
    </div>
  );
}
