//Files Containing Rest API routes

import * as express from "express";
import { isConstructorDeclaration } from "typescript";
import DB from "./db";
const router = express.Router();

router.get("/api/blog", async (req, res) => {
  try {
    let blogs = await DB.Blogs.allBlogs();
    res.json(blogs);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/api/blog/:id", async (req, res) => {
  try {
    let blogs = await DB.Blogs.oneBlog(req.params.id);
    res.json(blogs);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/api/blog/tag/:id", async (req, res) => {
  try {
    let blogs = await DB.Blogs.blogTags(req.params.id);
    let data = Object.values(blogs[0][0]);
    res.json(data);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.put("/api/blog/:id", async (req, res) => {
  const body = req.body;
  try {
    let blogs = await DB.Blogs.updateBlog(body, req.params.id);
    res.json(blogs);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.delete("/api/blog/:id", async (req, res) => {
  try {
    let deleteBlog = await DB.Blogs.deleteBlog(req.params.id);
    res.json(deleteBlog);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Error on line 65 insertId
router.post("/api/blog", async (req, res) => {
  const body = req.body;
  try {
    const postBody = await DB.Blogs.insertBlog(body.title,body.content);
    let id = postBody.insertId;
    DB.Blogs.insertBlogId(id);
    res.json(postBody);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

export default router;
