import { useState } from "react";
import DetailsForm from "./components/DetailsForm";
import Display from "./components/Display";

function App() {
  const [details, setDetails] = useState({
    name: "Sparrowhawk",
    country: "Gone",
    course: "The True Names of Things",
    skills: "True Speech, The Balance of the World",
  });

  function handleChange(name, country, course, skills) {
    if (
      name.trim() === "" ||
      country.trim() === "" ||
      course.trim() === "" ||
      skills.trim() === ""
    ) {
      return;
    }
    setDetails((prev) => {
      return {
        ...prev,
        name: name,
        country: country,
        course: course,
        skills: skills,
      };
    });
  }
  return (
    <div className="flex flex-col lg:flex-row lg:gap-20 justify-center items-center flex-nowrap gap-10">
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4 border-b-2 border-sky-300 text-center py-4 px-1">
          Financial Aid Helper
        </h1>
        <DetailsForm
          {...details}
          onChange={handleChange}
        />
      </div>
      {details.country === "Gont" ? "" : <Display {...details} />}
    </div>
  );
}

export default App;
