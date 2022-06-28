const express = require("express");
const app = express();
const port = 3000;
require("../db/conn");
const dbmodel = require("../db/models");
const csvtojson = require("csvtojson");
const router = require("../router/router");

app.use(express.json());
app.use(router);

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`);
})