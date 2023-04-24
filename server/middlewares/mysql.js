const mysql=require("mysql2")

const dataBase=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"elearning"
})

dataBase.connect((err)=>{
    if(err){
        throw(err)
    }
    console.log("dataBase connected")
})

module.exports = dataBase 