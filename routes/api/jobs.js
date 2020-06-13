const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");

// Load input validation
const validateJobInfo = require("../../validation/JobInfo");

// Load User model
const JobInfo = require("../../models/JobInfo");

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/jobinfo", (req, res) => {
// Form validation

const { errors, isValid } = validateJobInfo(req.body);

// Check validation
if (!isValid) {
  return res.status(400).json(errors);
}

const company_name = req.body.company_name;

// Find user by email
JobInfo.findOne({ company_name }).then(jobinfo => {
  if (jobinfo) {
    return res.status(400).json({ email: "company_name already exists" });
  } else {
    const newJobInfo = new JobInfo({
      company_name: req.body.company_name
    });

    newJobInfo
      .save()
      .then(user => res.json(jobinfo))
      .catch(err => console.log(err));
  }

});
}); //end of router

//api for get data from database
router.get("/getjobinfo",function(req,res){
 JobInfo.find({},function(err,data){
            if(err){
                res.send(err);
            }
            else{
                res.send(data);
                }
        });
})

module.exports = router;
