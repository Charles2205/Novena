const {Sequelize,DataTypes}= require('sequelize')
const dbConnect = require('../dbConnect')
const Appointments = dbConnect.define('Appointments',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
department:{
    type:DataTypes.STRING,
},
doctors:{
    type:DataTypes.STRING,
},
fullName:{
    type:DataTypes.STRING,
    
},
phoneNumber:{
    type:DataTypes.STRING
},
message:{
    type:DataTypes.TEXT,
},
date:{
    type:DataTypes.DATEONLY,
    allowNull:true
},
time:{
    type:DataTypes.TIME
}
})

Appointments.sync()
module.exports= Appointments