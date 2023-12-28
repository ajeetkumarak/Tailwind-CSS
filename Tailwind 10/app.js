const express = require("express")
const ejs = require("ejs")
const bodyParser = require("body-parser")

const PORT = process.env.PORT || 4000;
const IP = process.env.IP || 'localhost'

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
// app.use(express.urlencoded({extended: true}))

app.use(express.static("public"))
app.set("view engine", "ejs")

app.get("/", (req, res)=>{
    res.render("home")
});

app.listen(PORT, () => {
    console.log(`Surver is running on ${IP}:${PORT}`)
});