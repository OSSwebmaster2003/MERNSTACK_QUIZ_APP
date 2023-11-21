import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import data from "../database/data";
// redux actions
import * as Action from "../redux/question_reducer";

// fetch question hook to fetch api data and set value to store

export const useFetchQuestions = () => {
  const dispatch = useDispatch();
  const [getData, setGetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });

  useEffect(() => {
    setGetData((prev) => ({ ...prev, isLoading: true }));

    // async function to get backend
    (async () => {
      try {
        let questions = await data;

        if (questions.length) {
          setGetData((prev) => ({ ...prev, isLoading: false }));
          setGetData((prev) => ({ ...prev, apiData: questions }));

          // dispatch an action

          dispatch(Action.startExamAction(questions));
        } else {
          throw new Error("No question available");
        }
      } catch (error) {
        setGetData((prev) => ({ ...prev, isLoading: false }));
        setGetData((prev) => ({ ...prev, serverError: error }));
      }
    })();
  }, [dispatch]);

  return [getData, setGetData];
};