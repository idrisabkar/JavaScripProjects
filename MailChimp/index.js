var express = require("express")
var app = express()
var bodyParser = require("body-parser")
const Key = "c3252ed37170775938b696528703834c-us8"

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended : false}))

app.post("/user/",function endp(request,response){
    const userData = {
        email: request.body.email,
        name: request.body.name,
        password: request.body.password,
      };
      console.log(request.body.email)
    return response.send(userData)
})

app.get("/",function home(request,response) {
    return response.sendFile(__dirname + "/index.html")
})

app.listen("3000",function () {
    console.log("The App is Ready Listening At 3000 Port http://127.0.0.1:3000/")
  })