import React, { useEffect, useState } from "react";
import data from "../database/data";

function Questions(props) {
  const [checked, setChecked] = useState(undefined);

  function onSelect() {
    console.log("radio button change");
  }

  const question = data[0];

  useEffect(() => {
    console.log(question);
  });
  return (
    <div className="questions">
      <h2 className="text-light">{question.question}</h2>

      <ul key={question.id}>
        {question.options.map((question, index) => (
          <li key={index}>
            <input
              type="radio"
              value={true}
              name="options"
              id={`q${index}-option`}
              onChange={onSelect()}
            />

            <label htmlFor={`q${index}-option`} className="text-primary">
              {question}
            </label>
            <div className="check checked"></div>
          </li>
        ))}
        {/* <li>
          <input
            type="radio"
            value={true}
            name="options"
            id="q1-option"
            onChange={onSelect()}
          />

          <label htmlFor="q1-option" className="text-primary">
            option
          </label>
          <div className="check checked"></div>
        </li> */}
      </ul>
    </div>
  );
}

export default Questions;
