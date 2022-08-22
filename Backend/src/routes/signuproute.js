const express = require("express");
const SignupData = require("../model/SignupData");
const signupRouter=express.Router();

signupRouter.post("/signup", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
  console.log(req.body);
  var newuser = {
    firstName:req.body.item.firstName,
    lastName:req.body.item.lastName,
    phonenumber:req.body.item.phonenumber,
    userCategory:req.body.item.userCategory,
    email:req.body.item.email,
    password:req.body.item.password
  };
    console.log("signup route")
    console.log(newuser.email);
    var users = new SignupData(newuser);
    users.save();

    SignupData.findOne({ "email": newuser.email }, (error,user) => {
      console.log("error="+error);
      console.log("user="+user);
        if(error)
        {
          console.log(error);
        }
        else if(user)
        {
          console.log("user exists");
          res.json({status:false});
        }
        else
        {
          var signup = new SignupData(newuser);
          signup.save((error,newuser) => {
            console.log("saved");
            console.log("error= " + error);
            console.log("new user=" + newuser);
            if(error)
            {
              console.log(error);
              res.json({status:true});
            }
            else
            {
              // let payload = {subject: newuser._id};
              // let token = jwt.sign(payload,"secretkey");
              res.json({status:true}).status(200);
  
            }
          } 
          );
        }
    });
    
    //res.send(JSON.stringify(req.body));
  });

module.exports=signupRouter;