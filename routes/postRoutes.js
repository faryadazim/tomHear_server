import express from "express";
const router = express.Router();
import {
  getPost,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controller/controller.js";

// // middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//   console.log("Time: ", Date.now());
//   next();
// });
// define the home page route
router.get("/", getPost); 
router.post("/", createPost); 
router.patch("/:id", updatePost); 
router.delete("/:id", deletePost); 
router.patch("/:id/likePost", likePost); 
 

export default router;