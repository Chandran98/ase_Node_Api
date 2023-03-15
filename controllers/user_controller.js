const user = require("../models/user_models");

exports.singleUser = async (req, res) => {
  try {
    const userData = await user.findById(req.params.id);
    res
      .status(200)
      .json({ status: "user fetched successfully", data: { userData } });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.getallUser = async (req, res) => {
  try {
    const users = await user.find(req.body);
    res
      .status(200)
      .json({
        status: "user fetched successfully",
        idLength: users.length,
        data: { users },
      });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const userCreate = await user.create(req.body);
    res.status(200).json({ status: "user created", data: { userCreate } });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const userData = await user.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res
      .status(200)
      .json({ status: "user fetched successfully", data: { userData } });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await user.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: "user Deleted successfully" });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
