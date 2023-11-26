export async function getQuestions(req, res) {
  res.json("questions get api");
}

export async function insertQuestion(req, res) {
  res.json("questions api post request");
}

export async function deleteQuestions(req, res) {
  res.json("questions api delete request");
}

// result controllers

export async function getResult(req, res) {
  res.json("result api get request");
}

export async function storeResult(req, res) {
  res.json("result api post request");
}

export async function deleteResult(req, res) {
  res.json("result api delete request");
}
