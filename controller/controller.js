import postBody from "../model/postSchema.js";

//````````````  READ DATA  ````````````//

export const getPost = async (req, res) => {
  try {
    const post = await postBody.find();
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
  }
};

//`````````````  CREATE DATA  ````````````//

export const createPost = async (req, res) => {
  const newPost = new postBody(req.body);
  try {
    const addedPost = await newPost.save();
    res.status(200).json(addedPost);
  } catch (error) {
    console.log(error);
  }
};

//````````````  UPDATE  ```````````````//

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const update = req.body; //your update in json here
  const option = { new: true }; //will return updated document
  const user = await postBody.findByIdAndUpdate(id, update, option);

  res.json(user);
};

//````````````  UPDATE  ```````````````//

export const deletePost = async(req, res) => {
const {id} = req.params
  try {
const updatedDatas =  await  postBody.findByIdAndRemove(id);
console.log("done");
res.json(updatedDatas)
  } catch (error) {
    console.log(error);
  }
};

//````````````  LIKE / UPDATE a single part  ```````````````//

export const likePost = async(req, res) => {
const {id} = req.params
  try {
const post =  await  postBody.findById(id);
const updatedPost = await postBody.findByIdAndUpdate(id,{ likeCount: post.likeCount+1} , {new:true})
// console.log();
res.json(updatedPost)
  } catch (error) {
    console.log(error);
  }
};
