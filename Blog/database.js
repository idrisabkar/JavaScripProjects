// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

const Schema = mongoose.Schema({
    name : String,
    age : Number
})

const User = mongoose.model("users",Schema)
const newUser1 = User({
    name : "nasra",
    age : 22
})
const newUser2 = User({
    name : "said",
    age : 53
})


const newUser3 = User({
    name : "nuru",
    age : 19
})


async function addDocuments() {
    console.log("girdim")
   try {
    const result = await User.insertMany([newUser1,newUser2,newUser3])
    console.log(result)
   } catch (error) {
    console.log(error)
   }
}
async function getDocs() {
    try {
        const docs = await User.find() 
        for (const doc of docs) {
            console.log(doc.name)
        }
    } catch (error) {
        console.log(error);
    }
}


getDocs()

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/blog');
}
