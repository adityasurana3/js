const express = require("express");
const zod = require("zod");
const jwt = require("jsonwebtoken");

const app = express();

const email_schema = zod.string().email();
const password_schema = zod.string().min(6);

const secret = "secret";

data = {
  username: "some_name@gmail.com",
  password: "user_pass",
};

app.use(express.json());

function checkuserExist(username, password) {
  if (username === data.username && password === data.password) {
    return true;
  }

  return false;
}

function signJWT(username, password){
    const usernameresponse = email_schema.safeParse(username)
    const passwordresponse = email_schema.safeParse(password)
    if(!usernameresponse.success || !passwordresponse.success){
        return null;
    }
    else{
        if (checkuserExist(username, password)) {
            console.log("verified");
            let verify = jwt.sign({"usernmae":username}, secret);
            return verify
        }
        return "Wrong credential"
    }
    
}

function verifyJwt(token){
    let ans=true
    try {
        jwt.verify(token, secret);
    } catch (error) {
        ans = false
    }
    return ans
    
}

function decodeJwt(token){
    const decoded = jwt.decode(token);
    if (decoded){
        return true;
    }
    else{
        return false;
    }
}

app.post("/signin", function (req, res) {
  username = req.body.username;
  password = req.body.password;
  
  msg = signJWT(username, password)
  res.send({
      "msg":msg
  })
  
    
});



app.listen(3001);
