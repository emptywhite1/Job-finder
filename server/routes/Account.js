const express = require("express");
const router = express.Router();
const { Account } = require("../models");

router.get("/", async (req, res) => {
    const listOfAccount = await Account.findAll();
    res.json(listOfAccount);
;
});

router.post("/", async (req, res) => {
    const account = req.body;
    await Account.create(account);
    res.json(account);
});

module.exports = router;