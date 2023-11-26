import { Router } from "express";
const router = Router();

// questions route API

router.get("/questions", (req, res) => {
  res.json("questions api get request");
});

export default router;
