// const asyncHandler = require("express-async-handler");


// @desc Get Login page
// @route GET /
const getLogin = (req,res)=>{
  res.status(200);
  res.send("Hello Node!")
};

module.exports={getLogin}