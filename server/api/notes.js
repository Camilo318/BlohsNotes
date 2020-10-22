const express = require('express')
const router = express.Router()
const Note = require('../models/Note')

router.get('/', async (req, res, next) => {
    try {
        const notes = await Note.find({})
        if (!notes) return next()
        res.json({
            message: 'List of notes',
            data: notes
        })
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newNote = new Note(req.body)
        await newNote.save()
        res.json({
            message: 'Note was created'
        })
    } catch (err) {
        next(err)
    }
})


module.exports = router