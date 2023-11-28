import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ResultTable from "./ResultTable";
import { useDispatch, useSelector } from "react-redux";
import { resetAllAction } from "../redux/question_reducer";
import { resetResultAction } from "../redux/result_reducer";
import { attemptsNumber, earnPoints, flagResult } from "../helpers/helper";
import "../styles/Result.css";
import { usePublishResult } from "../hooks/SetResult";

function Result(props) {
  const {
    questions: { queue, answers },
    result: { result, userId },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  function onRestart() {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }

  const total_points = queue.length * 10;
  const attempts = attemptsNumber(result);
  const earn_points = earnPoints(result, answers, 10);
  const flag = flagResult(total_points, earn_points);

  // store user Result
  usePublishResult({
    result,
    username: userId,
    attempts,
    points: earn_points,
    achieved: flag ? "Passsed" : "Failed",
  });

  useEffect(() => {});
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
          <span className="bold">{total_points || 0}</span>
        </div>
        <div className="flex">
          <span>Total Questions :</span>
          <span className="bold">{queue.length || 0}</span>
        </div>
        <div className="flex">
          <span>Total Attempts :</span>
          <span className="bold">{attempts || 0}</span>
        </div>
        <div className="flex">
          <span>Total Earn Points :</span>
          <span className="bold">{earn_points || 0}</span>
        </div>
        <div className="flex">
          <span>Quiz Result </span>
          <span style={{ color: `${flag ? "green" : "red"}` }} className="bold">
            {flag ? "Passed" : "Failed"}
          </span>
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
