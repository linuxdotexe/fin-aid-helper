import { useRef } from "react";
import Input from "./Input";
import RadioGroup from "./RadioGroup";

export default function DetailsForm({
  name,
  country,
  course,
  skills,
  onChange,
}) {
  const nameRef = useRef();
  const countryRef = useRef();
  const courseRef = useRef();
  const skillsRef = useRef();
  const yesRef = useRef();
  return (
    <div className="flex flex-col gap-2">
      <Input
        labelText="Your Name"
        inputPlaceholder={name}
        type="text"
        ref={nameRef}
      />
      <Input
        labelText="Country"
        inputPlaceholder={country}
        type="text"
        ref={countryRef}
      />
      <Input
        labelText="Course Name"
        inputPlaceholder={course}
        type="text"
        ref={courseRef}
      />
      <Input
        labelText="Skill(s) you get from this course"
        inputPlaceholder={skills}
        type="text"
        ref={skillsRef}
      />
      <RadioGroup
        name="grammar"
        labelText="Improve grammar"
        options={["Yes", "No"]}
        ref={yesRef}
      />
      <button
        type="submit"
        className="border-2 border-neutral-400 enabled:hover:bg-sky-300 enabled:hover:text-black w-fit px-4 py-2 rounded-full text-neutral-300 font-bold m-auto enabled:hover:border-sky-900 disabled:opacity-20"
        onClick={() =>
          onChange(
            nameRef.current.value,
            countryRef.current.value,
            courseRef.current.value,
            skillsRef.current.value,
            yesRef.current.checked
          )
        }
      >
        Submit
      </button>
    </div>
  );
}
