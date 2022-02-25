"use strict";

const router = require("express").Router()
const HomeRoutes = require("./HomeRoutes")

router.use("/", HomeRoutes)

module.exports = router