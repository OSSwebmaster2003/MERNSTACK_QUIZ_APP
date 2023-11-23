import React from "react";
import { Link } from "react-router-dom";
import ResultTable from "./ResultTable";
import { useDispatch } from "react-redux";
import { resetAllAction } from "../redux/question_reducer";
import { resetResultAction } from "../redux/result_reducer";
import "../styles/Result.css";

function Result(props) {
  const dispatch = useDispatch();
  function onRestart() {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }
  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      <div className="result flex-center">
        <div className="flex">
          <span>Username</span>
          <span className="bold">Daily Tuition</span>
        </div>
        <div className="flex">
          <span>Total Quiz Points :</span>
          <span className="bold">50</span>
        </div>
        <div className="flex">
          <span>Total Questions :</span>
          <span className="bold">05</span>
        </div>
        <div className="flex">
          <span>Total Attempts :</span>
          <span className="bold">03</span>
        </div>
        <div className="flex">
          <span>Total Earn Points :</span>
          <span className="bold">30</span>
        </div>
        <div className="flex">
          <span>Quiz Result </span>
          <span className="bold">Passed</span>
        </div>
      </div>

      <div className="start">
        <Link className="btn" to={"/"} onClick={onRestart}>
          Restart
        </Link>
      </div>

      <div className="container">
        <ResultTable />
      </div>
    </div>
  );
}

export default Result;
