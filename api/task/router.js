// build your `/api/tasks` router here
const express = require('express')

const router = express.Router()

router.get('./api/tasks', async (req, res, next) => {
    try {
        res.json('getting all tasks')
    } catch (err) {
        next(err)
    }
})

router.post('./api/tasks', async (req, res, next) => {
    try {
        res.json('posting a new task')
    } catch (err) {
        next(err)
    }
})

module.exports = router