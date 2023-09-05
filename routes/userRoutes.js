const express = require('express')
const {home,contact,department,service,doctor,blog,about,departmentSingle,doctorSingle, appointment,blogSideBar,blogSingle,bookAppointments, confirmation} = require('../controllers/userController')


const app = express.Router()
app.get('/',home)
app.get('/about',about)
app.get('/contact',contact)
app.get('/department',department)
app.get('/appointment',appointment)
app.get('/blog-sidebar',blogSideBar)
app.get('/blog-single',blogSingle)
app.get('/department-single',departmentSingle)
app.get('/doctor-single',doctorSingle)
app.get('/service',service)
app.get('/doctor',doctor)
app.get('/confirmation',confirmation)
app.get('/blog',blog)

app.post('/appointment',bookAppointments)

module.exports= app