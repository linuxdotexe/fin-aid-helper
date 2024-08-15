import Input from "./Input";
import RadioGroup from "./RadioGroup";

export default function DetailsForm() {
  return (
    <div className="flex flex-col gap-3">
      <Input
        labelText="Name"
        inputPlaceholder="Sparrowhawk"
        type="text"
      />
      <Input
        labelText="Country"
        inputPlaceholder="Gont"
        type="text"
      />
      <Input
        labelText="Skill(s) you get from this course"
        inputPlaceholder="Weather Working, Shape Shifting"
        type="text"
      />
      <RadioGroup
        name="grammar"
        labelText="Opt in for better grammar"
        options={["Yes", "No"]}
      />
      <button
        type="submit"
        className="border-2 border-neutral-400 hover:bg-sky-300 hover:text-black w-fit px-4 py-2 rounded-full text-neutral-300 font-bold m-auto hover:border-sky-900"
      >
        Submit
      </button>
    </div>
  );
}
