const express = require('express')
const router = express.Router()
// const router = require('express').Router()
const Controller = require("../controllers/controllers");
const aunthentication = require('../middlewares/authen')
const costumerRouter = require('./costumerRouter')
const Controllers = require('../controllers/contollerCostumer')



router.use('/public', costumerRouter)
// router.get('/pub/clothes', Controllers.)
router.post('/register',aunthentication, Controller.register)
router.post('/login', Controller.login)
router.get('/clothes',aunthentication, Controller.readClothes)
router.post('/clothes',aunthentication, Controller.addProduct)
router.get('/category',aunthentication, Controller.readCategory)
router.post('/category',aunthentication, Controller.addCategory)
router.get('/clothes/:id', Controller.clothesDetail)
router.get('/category/:id', Controller.categoryDetail)
router.get('/image/:id', Controller.imageDetail)
router.put('/clothes/:id',aunthentication, Controller.editProduct)
router.put('/category/:id',aunthentication, Controller.editCategory)
router.delete('/clothes/:id', aunthentication, Controller.deleteProduct)
router.delete('/category/:id', aunthentication, Controller.deleteCategory)

module.exports = router