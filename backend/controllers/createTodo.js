const Todo = require("../model/todoModel");

exports.createTodo = async (req, res) => {
  try {
    // grab todo title from the client
    const { title } = req.body;
    if (!title) {
      res.status(401).send("Please provide a title");
    }

    const todoExists = await Todo.findOne({ title });
    if (todoExists) {
      res.status(401).send("A todo with this title already exists");
    }
    const todo = await Todo.create({ title });
    res.status(200).json({
      success: true,
      message: "Todo has been created",
      todo,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

("mongoose-unique-validator");
