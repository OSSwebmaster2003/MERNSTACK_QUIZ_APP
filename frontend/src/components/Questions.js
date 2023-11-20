import React, { useState } from "react";

function Questions(props) {
  const [checked, setChecked] = useState(undefined);

  function onSelect() {
    console.log("radio button change");
  }
  return (
    <div className="questions">
      <h2 className="text-light">Simple Question 1</h2>

      <ul>
        <li>
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
        </li>
      </ul>
    </div>
  );
}

export default Questions;
