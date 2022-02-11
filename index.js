import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'
import dotenv from 'dotenv'
import router from "./routes/postRoutes.js";
import connectDb from "./config/connectionDB.js";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;


app.use( bodyParser.json({extended: true,  limit: "3mb"}));
app.use(bodyParser.urlencoded({ extended: true, limit: "3mb"}));
app.use(cors())


app.get("/", (req, res) => {
  res.send("Hello");
});
app.use('/posts', router)
connectDb();
app.listen(PORT, () => {
  console.log(`tomHeart Server started on http://localhost:${PORT}`);
});
