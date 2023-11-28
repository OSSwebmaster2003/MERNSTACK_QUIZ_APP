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
  try {
    const result = await Results.find();
    res.json(result);
  } catch (error) {
    res.json({ error });
  }
}

// insert result
export async function insertResult(req, res) {
  try {
    const { username, result, attempts, points, achieved } = req.body;
    if (!username && !result) throw new Error("Data not provided");

    Results.create({ username, result, attempts, points, achieved });
    res.json({ msg: "Result Saved Successfully...!" });
  } catch (error) {
    res.json({ error });
  }
}

// delete result
export async function deleteResult(req, res) {
  try {
    await Results.deleteMany();
    res.json({ msg: "Result Deleted Successfully...!" });
  } catch (error) {
    res.json({ error });
  }
}
