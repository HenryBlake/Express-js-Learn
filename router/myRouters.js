const express = require("express");
const router = express.Router();
const mycontroller = require("../controller/myController");
router.get("/", mycontroller.defualt);

//The verey first response I have created.
router.get("/a", mycontroller.defualt);
//This is to make sure the router can be used as require()

//Handle th time request.
router.get("/time", mycontroller.getTime);

//Show how to use http parameters.When parameter's length greater then 6 it will return a 404 staus.
router.get("/user/:id", mycontroller.checkIdLength);

//Finc user by name
router.get("/username/:name", mycontroller.getUserInfo);

module.exports = router;
