const mycontroller = require("../controller/myController");
const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  mycontroller.defualt;
});

router.get("/a", mycontroller);
//This is to make sure the router can be used as require()
module.exports = router;
