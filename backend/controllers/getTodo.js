const Todo = require("../model/todoModel");

exports.getTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findOne(id);
    if (!todo) {
      res.status(401).send("This todo doesn't exist");
    }
    res.status(200).json({
      success: true,
      todo,
    });
  } catch (error) {
    console.log(error.message);
  }
};
