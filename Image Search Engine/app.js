const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const ejs = require("ejs");
let pics = []

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render("index",{pics : pics})
});

app.post('/', async (req, res) => {
    await getdata();
    res.render("index", { pics: pics });
});



async function getdata() {
    const response = await fetch("https://api.unsplash.com/search/photos?client_id=K8vBkKyCMU6LAs4ep1u2hVWiS0i4MplelExnf7JHqYw&query=cat&per_page=100")
    const data = await response.json()
    pics = data.results
    console.log(pics.length)
}









app.listen(port, () => console.log(`Example app listening on port ${port}!`));


