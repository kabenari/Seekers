const jwt = require('jsonwebtoken');
secretKey = "422fd60e51095b6f1a5576a93580fcf47326b91dcf4a6e16751c1692f3a3057d"


const verification  = (req,res,next)=>{
  console.log(req.headers.authorization)

    const token = req.headers.authorization.split(' ')[1];

    console.log(token);
  
    jwt.verify(token,secretKey,(err,decoded)=>{
      if(err){
        return res.status(401).send({message:"unauthorized aceess"})
      }
  
      req.decoded = decoded;
      next();
    })
}

module.exports = verification;