const User = require("../api/models/User");



const getAllUsers = async(req,res)=>{
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message:"error"+error.message});
    }
}


const CreateUser = async(req,res)=>{

    const {name,email,jobTitle,company} = req.body;
    try {
        const newUser = await User.create({
            name,email,jobTitle,company
        }) 

        res.status(200).json(newUser)
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message)
    }
}

const DeletUser = async(req,res)=>{
    const userId = req.params.id;
    try {
        const DeletUser = await User.findByIdAndDelete(userId);
        if(!DeletUser){
            res.status(400).json({message:"user not found"})
        }

        res.status(200).json({message:"User Deleted Succesfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:error.message})
    }
}


const UpdateUser = async(req,res)=>{
    const userId = req.paramas.id;
    const {name,email,jobTitle,company} = req.body;

    try {
        const UpdateUser = await User.findByIdAndUpdate(userId,{name,email,jobTitle,company},{
            new:true , runValidators:true
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({message:error.message})
    }
}

const GetSingleUSer = async(req,res)=>{
    const userId = req.paramas.id;
    
    try {
        const user = await User.findById(userId)
        if(!user){
            return res.status(400).json({message:"NO User Found"})
        }
        res.status(200).json(user)
    } catch (error) {
        console.log(error);
        res.status(500).json({message:error.message})
    }

}

module.exports = {
    getAllUsers,CreateUser,DeletUser,UpdateUser,GetSingleUSer
}