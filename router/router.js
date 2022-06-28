const express = require("express");
const router = new express.Router();
const csvtojson = require("csvtojson");
const dbmodel = require("../db/models");

//Upload file to database
router.post("/upload", async (req, res) => {
    try {
        const filePath = "data-sheet.csv"
        const file = await csvtojson().fromFile(filePath);
        const dbInsert = await dbmodel.insertMany(file);
        console.log("Inserted file to database");
        res.send("Inserted file to database");
    } catch (error) {
        console.log(`Some error occured: ${error}`);
        res.status(400).send(`Some error occured: ${error}`)
    }
});

//Read all users and their details stored in the database
router.get("/users", async (req, res) => {
    try {
        const userData = await dbmodel.find();
        res.status(200).send(`Data fetched successfully: ${userData}`);
    } catch (e) {
        res.status(400).send(e);
    }
})

//Create user by passing the user details
router.post("/users", async (req, res) => {
    try {
        const createUser = new dbmodel(req.body);
        const user = await createUser.save();
        res.status(201).send(`User created successfully: ${user}`);
    } catch (e) {
        res.status(400).send(e);
    }
});

//Read particular user details searching them by their policy number
router.get("/users/:policy_number", async (req, res) => {
    try {
        const readByPolicy = await dbmodel.find({ "policy_number": req.params.policy_number });
        res.status(200).send(`Data fetched successfully: ${readByPolicy}`);
    } catch (e) {
        res.status(400).send(e);
    }
});

//Update particular user details searching them by their policy number
router.patch("/users/:policy_number", async (req, res) => {
    try {
        const updateByPolicy = await dbmodel.findOneAndUpdate({ "policy_number": req.params.policy_number }, req.body, {
            new: true
        });
        res.status(200).send(`Updated user details: ${updateByPolicy}`);
    } catch (e) {
        res.status(400).send(e);
    }
})

//Delete particular user details searching them by their policy number
router.delete("/users/:policy_number", async (req, res) => {
    try {
        const deleteByPolicy = await dbmodel.findOneAndDelete(req.params.policy_number);
        res.status(200).send(`User deleted from database: ${deleteByPolicy}`);
    } catch (e) {
        res.status(400).send(e);
    }
})

module.exports = router;
