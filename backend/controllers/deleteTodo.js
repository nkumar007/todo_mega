const Todo = require("../model/todoModel");

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await Todo.findByIdAndDelete(id, { new: true });
    if (!deletedTodo) {
      res.status(401).send("This todo doesn't exist");
    }
    res.status(200).json({
      success: true,
      deletedTodo,
    });
  } catch (error) {
    console.log(error.message);
  }
};
