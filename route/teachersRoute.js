const express = require("express");
const {
  getAllTeachers,
  addTeacher,
  deleteTeacher,
  updateTeacher,
} = require("../controllers/teachersController");

const router = express.Router();

router.route("/").get(getAllTeachers).post(addTeacher).delete(deleteTeacher).put(updateTeacher);

module.exports = router;
