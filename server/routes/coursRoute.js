const express = require('express')
const router = express.Router()
const coursCtrl = require('../controllers/coursCtrl')
const verifyToken = require('../middlewares/verifyToken')

router.get('/selectAll',verifyToken,coursCtrl.getStudentCours)

module.exports= router