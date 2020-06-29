const express = require("express");
const path = require("path")
const morgan = require("morgan")
const entriesRoute = require("./routes/entries.route")

const app = express()

app.set("port",process.env.PORT || 3000);
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")

app.use(morgan("dev"))
app.use(express.urlencoded({extended:false}))
app.use(entriesRoute);

//404 handler
app.use((req,res)=>{
    res.status(404).render("404")
})

//starting the app

app.listen(app.get("port"),()=>{
    console.log("server on port",app.get("port"))
})