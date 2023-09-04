const express = require('express')
const {home,contact,department,services,doctors,blog,about} = require('../controllers/userController')


const app = express.Router()
app.get('/',home)
app.get('/about',about)
app.get('/contact',contact)
app.get('/department',department)
app.get('/services',services)
app.get('/doctors',doctors)
app.get('/blog',blog)

