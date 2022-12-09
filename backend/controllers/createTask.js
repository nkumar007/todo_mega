const Todo = require("../model/todoModel");

exports.createTask = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    if (!todo) {
      res.status(401).send("This todo doesn't exist.");
    }
    const { task } = req.body;
    await todo.tasks.push(task);
    await todo.save({ new: true });
    res.status(200).json({
      success: true,
      todo,
    });
  } catch (error) {
    console.log(error);
  }
};
