const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const auth = require("../../middleware/auth");
// Load input validation
const validateLoginInput = require("../../validation/login");
const validateRegisterInput = require("../../validation/register");
// Load User model
const User = require("../../models/user");
const jwtsign = (payload)=>{
  // Sign token
  return jwt.sign(
    payload,
    keys.secretOrKey,
    {
      expiresIn: 31556926 // 1 year in seconds
    }
  );
}
router.post("/login", (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  const email = req.body.email;
    const password = req.body.password;
  // Find user by email
    User.findOne({ email }).then(user => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found"});
      }
      
// Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user._id,
          name: user.firstName
        };
        const token = jwtsign(payload);
        // Sign token
        res.status(200).json({
          success: true,
          token: "Bearer " + token,
          user:{
            id:user._id,
            email:user.email,
            avatar:user.avatar,
            firstName:user.firstName,
            lastName:user.lastName,
            displayName:(user.firstName+" "+user.lastName),
            role:user.role,
            status:user.status,
          }
        });
        
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect", success: false });
      }
    });
  });
});

router.post("/register", (req, res) => {
    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);
    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.json({ email: "Email already exists", status: 501 });
      } else {
        const newUser = new User({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password
        });
    // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                const payload = {id:user._id, firstName:user.firstName};
                const token = jwtsign(payload);
                res.status(200).json({
                  token:token,
                  success:true,
                  user:{
                    id:user._id,
                    email:user.email,
                    avatar:user.avatar,
                    firstName:user.firstName,
                    lastName:user.lastName,
                    displayName:(user.firstName+" "+user.lastName),
                    role:user.role,
                    status:user.status,

                  }
                })
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  });

router.get("/my-account",auth, async(req,res)=>{
  try {
    const user = req.user;
    res.status(200).json({
      user: {
        email:user.email,
        firstName:user.firstName,
        avatar:user.avatar,
        lastName:user.lastName,
        id:user._id,
        displayName:(user.firstName+" "+user.lastName),
        role:user.role,
        status:user.status,

      }
    });
  } catch (error) {
    res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });
  }
});
  module.exports = router;
