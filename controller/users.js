const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const model = require('../models/index');

async function login(req, res) {
    console.log("bgsd");
    const user = {
        username : req.body.username,
        password : req.body.password
      };
    
      const valid = await model.User.findOne({
        where:{ username : user.username }
      });
    
      if(!valid) {
        res.status(403).json({ error : "user not found" });
      } else if(!bcrypt.compareSync(user.password, valid.dataValues.password)){
        res.status(403).json({ error : "password not valid" });
      }
    
      jwt.sign({user}, 'secretkey', (err, token) => {
        if(err) {
            res.json({ error : err  });
        }
        else {
            res.json({token});
        }
      });
}

async function signup(req, res) {
    const user = {
        username : req.body.username,
        password : bcrypt.hashSync(req.body.password)
      }
    
      const allUser = await model.User.findAll({});
      var flagUsername = false;
      console.log(allUser);
      
      for(i=0 ; i<allUser.length; i++) {
        var userdb = allUser[i].dataValues;
        if(user.username === userdb.username){
          flagUsername = true;
          console.log(i);
          break;
        }
      }
    
      if(flagUsername) {
        res.status(403).json({ error : "User already exist" });
      } else {
        const valid = await model.User.create({
          username : user.username,
          password : user.password
        });
      
        if(valid) {
          jwt.sign({user}, 'secretkey', (err, token) => {
            res.json({token});
          });
        } else {
          res.status(403);
        }
      }    
}

exports.login = login;
exports.signup = signup;