const seed = require("../seed")

function getAllTeachers(req, res) {
  res.send(seed);
}

const addTeacher = (req, res) => {
  res.send("add teacher request");
};

const deleteTeacher = (req, res) => {
  res.send("teacher profile deleted");
};

const updateTeacher = (req, res) => {
  res.send("teacher profile updated");
};

module.exports = { getAllTeachers, addTeacher, deleteTeacher, updateTeacher };
