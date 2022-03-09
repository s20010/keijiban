"use strict"

const router = require("express").Router()
const HomeController = require("../controllers/homeController")

router.get("/:category/new", HomeController.NewThread)
router.post("/:category/create", HomeController.createThread, HomeController.redirectView)
router.get("/:category/:thread", HomeController.thread)
router.post("/:category/:thread/create", HomeController.createMessage, HomeController.redirectView)
router.get("/:category/:thread/new", HomeController.newMessage)
router.get("/:category", HomeController.category)
router.get("/", HomeController.index)

module.exports = router