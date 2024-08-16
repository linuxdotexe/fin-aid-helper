import { useState } from "react";
import DetailsForm from "./components/DetailsForm";
import Display from "./components/Display";
import About from "./components/About";

function App() {
  const [details, setDetails] = useState({
    name: "Sparrowhawk",
    country: "Gont",
    course: "The True Names of Things",
    skills: "True Speech, The Balance of the World",
    grammar: false,
  });

  function handleChange(name, country, course, skills, grammar) {
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
        grammar: grammar,
      };
    });
  }
  return (
    <div className="flex flex-col lg:flex-row lg:gap-20 justify-center items-center min-h-screen gap-10">
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4 border-b-2 border-sky-300 text-center py-4 px-1">
          Financial Aid Helper
        </h1>
        <DetailsForm
          {...details}
          onChange={handleChange}
        />
      </div>
      {details.country === "Gont" ? <About /> : <Display {...details} />}
    </div>
  );
}

export default App;
