const mongoose = require(`mongoose`)
const Thread = require("../models/Thread")

module.exports = {
    index: (req, res) => {
        res.render("index")
    },
    category: (req, res) => {
        const category = req.params.category
        res.locals.category = category
        Thread.find({ category: category })
            .then(threads => {
                res.locals.threads = threads
                res.render("category")
            })
    },
    NewThread: (req, res) => {
        res.locals.category = req.params.category
        console.log(req.params.category)
        res.render("NewThread")
    },
    createThread: (req, res, next) => {
        console.log(req.body.title)
        const params = {
            title:  req.body.title,
            category: req.body.category
        }
        Thread.create(params)
            .then(() => {
                console.log("successfully create new thread")
                res.locals.redirect = `/${req.params.category}`
                next()
            })
            .catch(error => {console.log("error")})
    },

    thread: (req, res, next) => {
        res.locals.messages = ["hello","yakiniku", "sakihama"]
        res.render("thread")
        res.render("thread")
    },

    newMessage: (req, res, next) => {
        res.locals.category = req.params.category
        res.locals.thread = req.params.thread
        res.render("newMessage")
    },

    redirectView: (req, res, next) => {
        const redirectPath = res.locals.redirect
        if(redirectPath !== undefined) res.redirect(redirectPath)
        else next()
    }
}