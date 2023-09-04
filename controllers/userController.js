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

module.exports={
    home,
    about,
    contact,
    service,
    doctor,
    blog,
    department,
    departmentSingle,
    doctorSingle
}