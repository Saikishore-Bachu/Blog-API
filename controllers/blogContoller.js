const db = require("../models");

// create main Model
const Blog = db.blogs;

// 1. create blog

const addBlog = async (req, res) => {
  let info = {
    title: req.body.title,
    content: req.body.content,
    status: req.body.status,
  };

  const blog = await Blog.create(info);
  res.status(200).send(blog);
  console.log(blog);
};

// 2. get all blogs

const getAllBlogs = async (req, res) => {
  let blogs = await Blog.findAll({});
  res.status(200).send(blogs);
};

// 3. get single blog

const getOneBlog = async (req, res) => {
  let id = req.params.id;
  let blog = await Blog.findOne({ where: { id: id } });
  res.status(200).send(blog);
};

// 4. update blog

const updateBlog = async (req, res) => {
  let id = req.params.id;

  const blog = await Blog.update(req.body, { where: { id: id } });

  res.status(200).send(blog);
};

// 5. delete blog by id

const deleteBlog = async (req, res) => {
  let id = req.params.id;

  await Blog.destroy({ where: { id: id } });

  res.status(200).send("Blog is deleted !");
};

module.exports = {
  addBlog,
  getAllBlogs,
  getOneBlog,
  updateBlog,
  deleteBlog,
};
