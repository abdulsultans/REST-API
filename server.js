const teachersRoute = require("./route/teachersRoute");
const express = require("express");

const app = express();
const port = 4002;

const {
    getAllTeachers,
    addTeacher,
    deleteTeacher,
    updateTeacher,
  } = require("./controllers/teachersController");

app.use("/api/v1/teachers", teachersRoute);

app.get("/api/GET", (req, res) => {
  res.send(getAllTeachers);
});

app.post("/api/POST", (req, res) => {
  res.send(addTeacher);
});

app.delete("/api/DELETE", (req, res) => {
  res.send(deleteTeacher);
});

app.put("/api/UPDATE", (req, res) => {
  res.send(updateTeacher);
});

app.listen(port, () =>
  console.log(`SUCCESS, port ${port} is running successfully!`)
);
