const router = require("express").Router()

const {renderIndex,renderNewEntries,createNewEntries,renderTest} =require("../controller/entries.controller") 

router.get('/',renderIndex)

router.get('/newEntry',renderNewEntries)

router.post('/newEntry',createNewEntries)

router.get('/test',renderTest)

module.exports = router;