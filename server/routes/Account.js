const express = require("express");
const router = express.Router();
const { Account } = require("../models");
const bcrypt = require("bcrypt")
// router.get("/", async (req, res) => {
//     const listOfAccount = await Account.findAll();
//     res.json(listOfAccount);
//     ;
// });

router.post("/", async(req, res) => {
    const {email, password} = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        Account.create({
            email : email,
            password: hash,
        });
    })
})

router.post("/login", async (req, res) => {
    const {email, password} = req.body;
    const account = await Account.findOne({where: {email : email}});
    if(!account) {
        return res.status(400).json({
            status_code: 0,
            error_msg: "Account Does Not Exist!",
          });
    }

    bcrypt.compare(password, account.password).then((match) => {
        if(!match) return res.status(400).json({
            status_code: 0,
            error_msg: "Wrong Password!",
          });

        res.json("Login Success!");
    })
    
    
});

module.exports = router;