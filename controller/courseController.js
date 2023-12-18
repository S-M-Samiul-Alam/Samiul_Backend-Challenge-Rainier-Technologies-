const Course = require("../model/course-info-model");


// Create a new course
exports.createCourse = async (req, res) => {
    try {
      const newCourse = await Course.create(req.body);
      return res.status(201).json({ message: 'The course has been added successfully', course: newCourse });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to create the course' });
    }
  };

//get all course 

exports.getAllCourses = async (req, res) => {
    try {
      const courses = await Course.findAll(); // Using Sequelize's findAll method to retrieve all courses
      return res.status(200).json({ courses });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch courses' });
    }
  };

//get course by id 

exports.getCourseById = async (req, res) => {
    const { id } = req.params;
    try {
      const course = await Course.findByPk(id); // Using Sequelize's findByPk method to find a course by its primary key (ID)
      if (!course) {
        return res.status(404).json({ error: 'Course not found' });
      }
      return res.status(200).json({ course });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch course by ID' });
    }
  };


//update course by id 

exports.updateCourseById = async (req, res) => {
    const { id } = req.params;
    try {
      const [updated] = await Course.update(req.body, {
        where: { id },
      });
      if (updated) {
        const updatedCourse = await Course.findByPk(id); // Fetching the updated course using findByPk
        return res.status(200).json({ message: 'Course updated successfully', course: updatedCourse });
      }
      return res.status(404).json({ error: 'Course not found' });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to update course' });
    }
  };

  
//delete course by id

exports.deleteCourseById = async (req, res) => {
    const { id } = req.params;
    try {
      const deleted = await Course.destroy({
        where: { id }, // Using Sequelize's destroy method to delete a course by ID
      });
      if (deleted) {
        return res.status(200).json({ message: 'Course deleted successfully' });
      }
      return res.status(404).json({ error: 'Course not found' });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to delete course' });
    }
  };
  

  





