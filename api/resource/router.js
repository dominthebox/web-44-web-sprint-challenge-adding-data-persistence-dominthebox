// build your `/api/resources` router here
const express = require('express')

const router = express.Router()

router.get('./api/resources', async (req, res, next) => {
    try {
        res.json('getting all resources')
    } catch (err) {
        next(err)
    }
})

router.post('./api/resources', async (req, res, next) => {
    try {
        res.json('posting new resource')
    } catch (err) {
        next(err)
    }
})

module.exports = router