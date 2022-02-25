"use strict";

const router = require("express").Router()
const HomeController = require("../controllers/HomeController")

router.get("/:category/new", HomeController.NewThread)
router.post("/:category/create", HomeController.createThread, HomeController.redirectView)
router.get("/:category", HomeController.category)
router.get("/", HomeController.index)

module.exports = router