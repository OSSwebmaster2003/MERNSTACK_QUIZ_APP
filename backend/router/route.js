import { Router } from "express";
const router = Router();

// import controllers
import * as controller from "../controllers/controller.js ";

// questions route API

router
  .route("/questions")
  .get(controller.getQuestions)
  .post(controller.insertQuestion)
  .delete(controller.deleteQuestions);

router
  .route("/result")
  .get(controller.getResult)
  .post(controller.storeResult)
  .delete(controller.deleteResult);

export default router;
