import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
// import data
import questions, { answers } from "../database/data.js";

// get all questions
export async function getQuestions(req, res) {
  try {
    const questions = await Questions.find();
    res.json(questions);
  } catch (error) {
    res.json({ error });
  }
}

// insert all questions
export async function insertQuestions(req, res) {
  try {
    Questions.insertMany({ questions, answers });
    res.json("Questions inserted successfully");
  } catch (error) {
    res.json({ error });
  }
}

// delete all questions
export async function deleteQuestions(req, res) {
  try {
    await Questions.deleteMany();
    res.json({ msg: "Questions deleted successfully" });
  } catch (error) {
    res.json({ error });
  }
}

// get result
export async function getResult(req, res) {
  res.json("Result api get request");
}

// insert result
export async function insertResult(req, res) {
  res.json("Result api post request");
}

// delete result
export async function deleteResult(req, res) {
  res.json("Result api delete request");
}
