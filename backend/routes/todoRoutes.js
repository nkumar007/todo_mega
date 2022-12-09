const express = require("express");
const router = express.Router();

const { createTodo } = require("../controllers/createTodo");
const { getTodo } = require("../controllers/getTodo");
const { getTodos } = require("../controllers/getTodos");
const { deleteTodo } = require("../controllers/deleteTodo");
const { createTask } = require("../controllers/createTask");
const { editTodo } = require("../controllers/editTodo");
const { editTask } = require("../controllers/editTask");
const { deleteTask } = require("../controllers/deleteTask");

router.post("/createTodo", createTodo);
router.get("/getTodos", getTodos);
router.get("/getTodo/:id", getTodo);
router.put("/editTodo/:id", editTodo);
router.delete("/deleteTodo/:id", deleteTodo);
router.post("/createTask/:id", createTask);
router.put("/editTask/:id", editTask);
router.delete("/deleteTask/:id", deleteTask);

module.exports = router;
