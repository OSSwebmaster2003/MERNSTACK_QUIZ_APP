import React, { useEffect, useState } from "react";
// custom hook
import { useFetchQuestions } from "../hooks/FetchQuestion";
import { useSelector } from "react-redux";

function Questions({ onChecked }) {
  const [{ isLoading, apiData, serverError }] = useFetchQuestions();
  function onSelect(index) {
    // console.log(index);
    onChecked(index);
  }

  const trace = useSelector((state) => state.questions.trace);
  const questions = useSelector((state) => state.questions.queue);
  const question = questions && questions[trace];

  useEffect(() => {});

  if (isLoading) {
    return <h3 className="text-light">Loading...</h3>;
  }
  if (serverError) {
    return <h3 className="text-light">Something wen wrong | Server Error</h3>;
  }
  return (
    <div className="questions">
      <h2 className="text-light">{question?.question}</h2>

      <ul key={question?.id}>
        {question?.options.map((question, index) => (
          <li key={index}>
            <input
              type="radio"
              value={false}
              name="options"
              id={`q${index}-option`}
              onChange={() => onSelect(index)}
            />

            <label htmlFor={`q${index}-option`} className="text-primary">
              {question}
            </label>
            <div className="check"></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Questions;
