const express = require("express");
const router = express.Router();
const { Account } = require("../models");

// router.get("/", async (req, res) => {
//     const listOfAccount = await Account.findAll();
//     res.json(listOfAccount);
//     ;
// });

router.post("/", async (req, res) => {
    const {email, password} = req.body;
    await Account.create({
        email : email,
        password: password,
    });
    res.json("success");
});

router.post("/login", async (req, res) => {
    const {email, password} = req.body;
    const account = await Account.findOne({where: {email : email}});
    if(!account) {
        res.json({error:"account doesn't exist"});
    }

    const passwordCheck = await Account.findOne({where : {password : password}})
    if(!passwordCheck) {
        res.json({error: "Wrong Pass Word!"})
        
    }
    res.json("Login Success!");
});

module.exports = router;