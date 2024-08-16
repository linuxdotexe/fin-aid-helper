import { defaultAnswers } from "../utils/data";
import Answer from "./Answer";

export default function Display({ name, country, course, skills }) {
  let skillsArray = skills.split(",");

  let whyAnswer = defaultAnswers.whyFinAid;

  whyAnswer = whyAnswer.replace("'your name'", name);
  whyAnswer = whyAnswer.replace("'your country'", country);
  whyAnswer = whyAnswer.replace("'Course name'", course);
  whyAnswer = whyAnswer.replace("'skill name'", skillsArray[0]);
  whyAnswer = whyAnswer.replace("'machine learning'", skillsArray[1]);

  let howAnswer = defaultAnswers.how;
  howAnswer = howAnswer.replace(
    "'math and algorithms and problem-solving skills'",
    skillsArray[1]
  );
  howAnswer = howAnswer.replace("'machine learning'", skillsArray[0]);
  howAnswer = howAnswer.replace("'Programming'", skillsArray[0]);
  howAnswer = howAnswer.replace(
    "'machine learning and deep learning'",
    skillsArray[1]
  );

  let noAnswer = defaultAnswers.ifNo;

  return (
    <div className="flex flex-col w-1/3 gap-2 my-10 text-justify max-h-[88vh] overflow-x-hidden overflow-scroll pr-5">
      <h2 className="text-xl text-neutral-300 font-semibold">
        Why are you applying for Financial Aid? (150 words minimum required)
      </h2>
      <Answer>{whyAnswer}</Answer>
      <h2 className="text-xl text-neutral-300 font-semibold">
        How will taking this course help you achieve your career goals? (150
        words minimum required)
      </h2>
      <Answer>{howAnswer}</Answer>
      <h2 className="text-xl text-neutral-300 font-semibold">
        If you answered no, please help us understand why?
      </h2>
      <Answer>{noAnswer}</Answer>
    </div>
  );
}
