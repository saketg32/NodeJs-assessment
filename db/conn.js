const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/database")
.then(()=>{
    console.log("Connection successful");
}).catch((err)=>{
    console.log(`Connection to mongo failed: ${err}`);
})