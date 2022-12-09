const Todo = require("../model/todoModel");

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    if (!todos) {
      res.status(401).send("There are no todos!");
    }
    res.status(200).json({
      success: true,
      todos,
    });
  } catch (error) {
    console.log(error.message);
  }
};
