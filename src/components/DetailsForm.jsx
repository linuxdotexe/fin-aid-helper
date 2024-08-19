import { useRef } from "react";
import Input from "./Input";
import RadioGroup from "./RadioGroup";
import Button from "./Button";

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
        name="name"
        ref={nameRef}
      />
      <Input
        labelText="Country"
        inputPlaceholder={country}
        type="text"
        name="country"
        ref={countryRef}
      />
      <Input
        labelText="Course Name"
        inputPlaceholder={course}
        type="text"
        name="course name"
        ref={courseRef}
      />
      <Input
        labelText="Skill(s) you get from this course"
        inputPlaceholder={skills}
        type="text"
        name="skills"
        ref={skillsRef}
      />
      <RadioGroup
        name="grammar"
        labelText="Improve grammar"
        options={["Yes", "No"]}
        ref={yesRef}
        defaultCheckedIndex="1"
      />
      <Button
        className="m-auto"
        type="submit"
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
      </Button>
    </div>
  );
}
