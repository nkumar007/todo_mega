const Todo = require("../model/todoModel");

exports.editTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { taskIndex, task } = req.body;
    const todo = await Todo.findById(id);
    if (!todo) {
      res.status(401).send("Todo doesn't exist");
    }
    if (todo.tasks.length == 0) {
      res.status(401).send("No tasks to edit");
    }
    todo.tasks[taskIndex] = task;
    await todo.save({ new: true });
    console.log(todo);
    res.status(200).json({
      success: true,
      message: "Edited task",
      todo,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: "Failed to edit the tasks",
    });
  }
};
