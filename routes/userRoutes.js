const express = require('express')
const {home,contact,department,service,doctor,blog,about,departmentSingle,doctorSingle} = require('../controllers/userController')


const app = express.Router()
app.get('/',home)
app.get('/about',about)
app.get('/contact',contact)
app.get('/department',department)
app.get('/department-single',departmentSingle)
app.get('/doctor-single',doctorSingle)
app.get('/service',service)
app.get('/doctor',doctor)
app.get('/blog',blog)


module.exports= app