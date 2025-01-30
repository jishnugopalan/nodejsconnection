const User=require('../models/user');

exports.Register=(req,res)=>{
    User.findOne({email:req.body.email}).then((user)=>{
        if(user){
            return res.status(400).json({message:"User already exists"});
        }
        let newUser=User(req.body);
        newUser.save().then((newuser)=>{
            if(newuser){
                return res.status(200).json({message:"User created successfully"});
            }
			else{
			    return res.status(500).json({message:"Internal error"});
			}
        })
    })

}