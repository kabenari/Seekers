const express = require('express')
const app = express()
const cors = require("cors");
const port = 3000
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const secretKey = "422fd60e51095b6f1a5576a93580fcf47326b91dcf4a6e16751c1692f3a3057d"

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://zenTarg:swarup0225@swarup1.hovsebl.mongodb.net/UserManagement?retryWrites=true&w=majority").then(
    console.log('Connected Succesfull')
).catch((error)=>{
    console.log("something qrong with the mongo connection");
})



const userRoutes = require('./routes/UserRoutes.js');
const verification = require('./middlewares/VerifyToken.js');
app.use('/users',userRoutes);

app.post('/jwt',async(req,res)=>{
  const user = req.body;
  const token = jwt.sign(user,secretKey,{expiresIn:'1h'})
  res.send({token})
})

app.get('/',verification,(req,res)=>{
  res.send("hello")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})