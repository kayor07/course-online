const jwt = require("jsonwebtoken")
module.exports =verifyToken=(req,res,next)=>{
    
  
    try {
        let token= req.headers["authorization"].split(" ")[1]
     let decodedToken= jwt.verify(token,"My_TOKEN_SECRET")
    let id_etudiant = decodedToken.id_etudiant
    req.body.id_etudiant= id_etudiant
    next()
    } catch (err) {
        res.status(401).json({err})
    }
}

