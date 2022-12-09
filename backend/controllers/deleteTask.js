const Todo = require("../model/todoModel");

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { taskIndex } = req.body;
    const todo = await Todo.findById(id);
    if (!todo) {
      res.status(401).send("Todo doesn't exist");
    }
    if (todo.tasks.length == 0) {
      res.status(401).send("No tasks to delete");
    }
    todo.tasks.splice(taskIndex, 1);
    await todo.save({ new: true });
    console.log(todo);
    res.status(200).json({
      success: true,
      message: "Deleted task",
      todo,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: "Failed to delete the task",
    });
  }
};
