
const express = require('express');
const mongoose =require('mongoose');
const bodyParser = require('body-parser');
const cors=require('cors');
require("dotenv").config()
const PORT = process.env.PORT || 3001;

// const taskroutes = require("./routes/TaskRoutes");
// const userroutes = require("./routes/UsersRoutes");
// const adminroutes = require("./routes/AdminRoutes");
// const loginroutes = require("./routes/LoginRoutes")


const app=express();
app.use(express.json());
app.set('view engine', 'ejs');
// use the cross middleware for cross origin resource sharing 
app.use(cors());
// Use body-parser middleware to parse application/json content type
// app.use(bodyParser.json());

// mongoose.connect(process.env.MONGO_URI)
// .then(()=>{
//     console.log('Mongo DB connected ');
// })
// .catch((error)=>{
//     console.log("Mongo Error",error);
// })

app.get('/',(req,res)=>{
    res.send('<div>Server running</div>')
    // res.render('./home.ejs')
});

// app.use(taskroutes)
// app.use(userroutes)
// app.use(adminroutes)
// app.use(loginroutes)

app.get('*',(req,res)=>{
    res.send("<h4>Page Not Found</h4>");
});

app.listen(PORT,()=>{
    console.log(`listning at ${PORT}`)
})



