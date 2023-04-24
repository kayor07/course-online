const dataBase = require('../middlewares/mysql')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
exports.signup =(req,res)=>{
 let insertNewStudentQuery="INSERT INTO etudiant(Last_name,First_name,pseudo,id_filiere,Pasword) VALUES (?,?,?,?,?)"
    bcrypt.hash(req.body.confMdp,10,(err,hash)=>{
        if(err)throw err
        console.log(hash)
        dataBase.query(insertNewStudentQuery,[req.body.nom,req.body.prenom,req.body.pseudo,req.body.selectFil,hash],(err,result)=>{
        if(err) {throw(err)} 
            
            res.status(201).json({ message: "insertion réussi"}) 
    }) 
    })
}
exports.login =(req,res)=>{
     let selectStudentLoginQuery= 'SELECT * FROM etudiant WHERE pseudo = ?'
     dataBase.query(selectStudentLoginQuery,req.body.pseudo,(error,result)=>{
     if(error)throw error
     if(result.length < 1){
        return res.status(401).json({
            message:"User not found"
        })
     }
     console.log(result)
     res.status(201)
     bcrypt.compare(req.body.pwd, result[0].Pasword).then((valid)=>{
       if(!valid){
        res.status(401).end()
       }
       let accessToken = jwt.sign(
        {id_etudiant:result[0].id_etudiant},
        "My_TOKEN_SECRET",
        { 
           expiresIn:"10s"
        }
       )
       res.status(201).json({
        accessToken
       })
     })
    })
}

