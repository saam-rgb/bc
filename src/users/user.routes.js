const express = require("express");
const router = express.Router();
const Users = require("./user.model");
const { addABag } = require("./user.controller");

router.post("/add-new-user", addABag);

module.exports = router;
