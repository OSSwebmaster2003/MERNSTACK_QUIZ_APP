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
