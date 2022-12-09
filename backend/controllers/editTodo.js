const Todo = require("../model/todoModel");

exports.editTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = req.body;
    console.log(todo);

    const editedTodo = await Todo.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!editedTodo) {
      res.status(401).send("This todo doesn't exist");
    }
    res.status(200).json({
      success: true,
      message: "Updated the todo",
      editedTodo,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: "failed to update the todo",
    });
  }
};
