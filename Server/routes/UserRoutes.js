const express = require("express")
const router = express.Router();
const User = require("../api/models/User.js")
const UserController = require("../Controllers/UserControllers.js");
const verification = require("../middlewares/VerifyToken.js");
 
router.get('/',UserController.getAllUsers)
router.post('/',UserController.CreateUser)
router.delete('/:id',verification,(req,res)=>{
    UserController.DeletUser(req,res)
})
router.put('/:id',verification,(req,res)=>{
    UserController.UpdateUser(req,res)
})

router.get('/:id',
    UserController.GetSingleUSer
)




module.exports = router