const express = require("express");
const app = express();
const port = 3000;
require("../db/conn");
const dbmodel = require("../db/models");
const csvtojson = require("csvtojson");
const router = require("../router/router");
const { urlencoded } = require("express");

app.use(express.json());
// app.use(urlencoded({extended: false}));
app.use(router);

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`);
})