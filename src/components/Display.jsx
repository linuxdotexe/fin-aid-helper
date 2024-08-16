import { defaultAnswers, grammarCorrectedAnswers } from "../utils/data";
import Answer from "./Answer";

export default function Display({ name, country, course, skills, grammar }) {
  function capitalize(userWord) {
    let wordArray = userWord.split(" ");
    let result = "";
    for (let word of wordArray) {
      word = word.charAt(0).toUpperCase() + word.slice(1);
      result += word + " ";
    }
    result = result.trim();
    return result;
  }

  let skillsArray = skills.split(",");

  let answerChoice = grammar ? grammarCorrectedAnswers : defaultAnswers;

  let whyAnswer = answerChoice.whyFinAid;

  whyAnswer = whyAnswer.replace("'your name'", capitalize(name));
  whyAnswer = whyAnswer.replace("'your country'", capitalize(country));
  whyAnswer = whyAnswer.replace("'Course name'", capitalize(course));
  whyAnswer = whyAnswer.replace("'skill name'", skillsArray[0]);
  whyAnswer = whyAnswer.replace("'machine learning'", skillsArray[1]);

  let howAnswer = answerChoice.how;

  howAnswer = howAnswer.replace(
    "'math and algorithms and problem-solving skills'",
    skillsArray[1] || skillsArray[0]
  );
  howAnswer = howAnswer.replace("'machine learning'", skillsArray[0]);
  howAnswer = howAnswer.replace("'Programming'", skillsArray[0]);
  howAnswer = howAnswer.replace(
    "'machine learning and deep learning'",
    skillsArray[2] || skillsArray[1] || skillsArray[0]
  );

  return (
    <div className="flex flex-col w-2/3 lg:w-1/3 gap-2 my-10 text-justify max-h-[88vh] overflow-x-hidden overflow-scroll pr-5">
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
      <Answer>{answerChoice.ifNo}</Answer>
    </div>
  );
}
