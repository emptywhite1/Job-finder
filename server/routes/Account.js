const express = require("express");
const router = express.Router();
const { Account } = require("../models");
const bcrypt = require("bcrypt")

const{sign} = require("jsonwebtoken");
const { default: userEvent } = require("@testing-library/user-event");
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
    if(!account) return res.json({error: "User Doesn't Exist!" });

    bcrypt.compare(password, account.password).then((match) => {
        if(!match) return res.json({error: "Wrong Password!" });

        const accessToken = sign({email : account.email, password : account.password}, "seasdcret");
        res.json(accessToken)
    })
});


module.exports = router;