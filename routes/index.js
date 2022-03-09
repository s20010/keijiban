"use strict"

const router = require("express").Router()
const HomeRoutes = require("./HomeRoutes")
const userRoutes = require("./userRoutes")

router.use("/users",userRoutes)
router.use("/", HomeRoutes)


module.exports = router