import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export function attemptsNumber(result) {
  return result.filter((r) => r !== undefined).length;
}

export function earnPoints(result, answers, point) {
  return result
    .map((element, index) => answers[index] === element)
    .filter((r) => r === true)
    .map((i) => point)
    .reduce((prev, curr) => prev + curr, 0);
}

export function flagResult(total_points, earn_points) {
  return (total_points * 50) / 100 < earn_points;
}

export function CheckUserExist({ children }) {
  const auth = useSelector((state) => state.result.userId);
  return auth ? children : <Navigate to="/" replace="true"></Navigate>;
}
