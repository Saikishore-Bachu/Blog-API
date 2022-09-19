// import controllers blogs
const blogController = require("../controllers/blogContoller.js");

// router
const router = require("express").Router();

// use routers
router.post("/addBlog", blogController.addBlog);

router.get("/allBlogs", blogController.getAllBlogs);

router.get("/:id", blogController.getOneBlog);

router.put("/:id", blogController.updateBlog);

router.delete("/:id", blogController.deleteBlog);

module.exports = router;
