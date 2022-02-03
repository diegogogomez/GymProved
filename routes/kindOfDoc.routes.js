const express = require('express')
const router = express.Router();

const { getKindOfDocs, insertKindOfDocs } = require('../controllers/kindOfDoc.controller')

router.route('/kindOfDoc').get(getKindOfDocs).post(insertKindOfDocs);


module.exports = { kindOfDoc: router }
