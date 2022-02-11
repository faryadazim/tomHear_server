import mongoose from 'mongoose'
var Schema = mongoose.Schema;

var postSchema = mongoose.Schema({
  title: String, // String is shorthand for {type: String}
  creater: String,
  message: String,
  tags: [String],
  selectedFile:String,
  createdAt: { type: Date, default: Date.now },
  likeCount: { type: Number, default: 0 },
});

const postBody = mongoose.model("PostMessage" , postSchema)
export default postBody;