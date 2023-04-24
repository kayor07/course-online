const dataBase = require('../middlewares/mysql')

exports.getStudentCours=(req,res)=>{
       let selectAllCours = 'SELECT * FROM Cours'
       dataBase.query(selectAllCours,(err,result)=>{
        if(err)
        throw err
        res.status(201).json({result})
       })
}
