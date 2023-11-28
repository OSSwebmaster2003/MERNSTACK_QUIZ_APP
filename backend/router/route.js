import { Router } from "express";
const router = Router();

// import controllers
import * as controller from "../controllers/controller.js";

// Questions Routes API

router
  .route("/questions")
  .get(controller.getQuestions)
  .post(controller.insertQuestions)
  .delete(controller.deleteQuestions);

// Result Routes API
router
  .route("/result")
  .get(controller.getResult)
  .post(controller.insertResult)
  .delete(controller.deleteResult);

export default router;
