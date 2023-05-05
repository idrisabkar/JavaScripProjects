const { Console } = require("console")
var express = require("express")
var app = express()


app.use(express.static('public'));

app.get("/",function (request,response) {
    return response.sendFile(__dirname + "/index.html")
})


app.listen("3000",function () {
    console.log("App Started at port 3000 http://127.0.0.1:3000/")
  })