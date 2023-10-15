const User = require("../Model/userModel");

exports.postUser = async (req, res) => {
  const newUser = req.body;
  console.log(newUser);
  const user = await User.create(newUser);
  res.status(200).json({
    status: "success",
    length: 1,
    data: {
      user,
    },
  });
};
exports.updateUser = async (req, res) => {
  const name = req.params.name;
  const user = await User.findOneAndUpdate(
    { name: `${name}` },
    { $set: req.body }
  );
  console.log(user);
};
exports.deleteUser = async (req, res) => {
  const name = req.params.name;
  await User.findOneAndDelete({ name: `${name}` });
};
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};
