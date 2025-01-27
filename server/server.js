import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
const __dirname = path.resolve();

dotenv.config();
const app = express();

// mongoose DB
// mongoose.connect("mongodb://127.0.0.1:27017/BOOK");
const MONGOOSE_STRING = process.env.MONGOOSE_STRING;
mongoose.connect(MONGOOSE_STRING);
const Book = mongoose.model("Book", { title: String, author: String });

//跨域
app.use(cors());

//获取JSON格式的req.body
app.use(express.json());

//获取所有图书
app.get("/api/getbooks", async (req, res) => {
  const getbooks = await Book.find({});
  res.status(200).json(getbooks);
});

//创建图书
app.post("/api/createbook", (req, res) => {
  const b = new Book({ title: req.body.title, author: req.body.author });
  b.save();
  res.status(200).json("post success!");
});

//更新图书
app.put("/api/books/", async (req, res) => {
  const b = { title: req.body.title, author: req.body.author };
  await Book.replaceOne({ _id: req.body.id }, b);
  res.status(200).json("update success!");
});

//删除图书
app.delete("/api/books/:id", async (req, res) => {
  const bookId = req.params.id;
  console.log(req.params);
  try {
    await Book.deleteOne({ _id: bookId });
    res.json("How dare you!");
  } catch (error) {
    res.json(error);
  }
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/dist/index.html"));
  });
}

app.listen(process.env.PORT, () => {
  console.log(`启动端口:${process.env.PORT}`);
});
