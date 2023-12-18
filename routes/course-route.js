const express = require("express");
const router = express.Router();
const courseController = require("../controller/courseController");

router.post("/add/", courseController.createCourse);
router.get("/getAllCourse/", courseController.getAllCourses);
router.get("/getCourseById/:id", courseController.getCourseById);
router.put("/updateCourseById/:id", courseController.updateCourseById);
router.delete("/deleteCourseById/:id", courseController.deleteCourseById);


module.exports = router;