const appointments = require('../database/models/appointments')

const home=(req,res)=>{
    res.render('home')
}
const about=(req,res)=>{
    res.render('about')
}
const service=(req,res)=>{
    res.render('service')
}
const department=(req,res)=>{
    res.render('department')
}
const departmentSingle=(req,res)=>{
    res.render('department-single')
}
const doctor=(req,res)=>{
    res.render('doctor')
}
const blog=(req,res)=>{
    res.render('blog')
}
const contact =(req,res)=>{
    res.render('contact')
}
const doctorSingle=(req,res)=>{
    res.render('doctor-single')
}
const appointment=(req,res)=>{
    res.render('appointment')
}
const blogSideBar=(req,res)=>{
    res.render('blog-sidebar')
}
const blogSingle=(req,res)=>{
    res.render('blog-single')
}
const confirmation=(req,res)=>{
    res.render('confirmation')
}
const bookAppointments=async(req,res)=>{
    const {department,doctors,fullName,message,phoneNumber,date,time} = req.body
    await appointments.create({department,doctors,fullName,message,phoneNumber,date,time})
    res.redirect('/confirmation')
    
}

module.exports={
    home,
    about,
    contact,
    service,
    doctor,
    blog,
    department,
    departmentSingle,
    doctorSingle,
    appointment,
    blogSideBar,
    blogSingle,
    confirmation,
    bookAppointments,
    
}