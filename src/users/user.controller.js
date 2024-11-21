const Users = require("./user.model");

const addABag = async (req, res) => {
  try {
    const newUser = await Users({ ...req.body });
    newUser.save();
    res
      .status(200)
      .send({ message: "user created successfully", user: newUser });
  } catch (error) {
    console.log(error);
    res
      .status(200)
      .send({ message: "user created successfully", user: newUser });
  }
};

module.exports = { addABag };
