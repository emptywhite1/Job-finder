const express = require("express");
const router = express.Router();
const { Jobs } = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

router.get("/", async (req, res) => {
  const listOfJobs = await Jobs.findAll();
  res.json(listOfJobs);
});


router.post("/", async (req, res) => {
  const job = req.body;
  await Jobs.create(job);
  res.json(job);
});

router.post("/search", async (req, res) => {
  const jobTitle = req.body.titleValue;
  const jobLocation = req.body.locationValue;
  const filteredJobs = await Jobs.findAll({
    where: {
      title: { [Op.like]: `%${jobTitle}%` },
      location: { [Op.like]: `%${jobLocation}%` }
    }
  })
  res.json(filteredJobs);
});

module.exports = router;