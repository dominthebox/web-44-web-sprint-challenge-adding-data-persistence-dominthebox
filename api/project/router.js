// build your `/api/projects` router here
const express = require('express')

const router = express.Router()

router.get('./api/projects', async (req, res, next) => {
    try {
        res.json('getting all projects')
    } catch (err) {
        next(err)
    }
})

router.post('./api/projects', async (req, res, next) => {
    try {
        res.json('posting new project')
    } catch (err) {
        next(err)
    }
})


module.exports = router