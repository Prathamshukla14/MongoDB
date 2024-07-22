const express = require("express");
const app = express();

const userModel = require("./usermodel");


app.get("/create", async function(req, res){
    let usercreated= await userModel.create({
        name: "ram",
        email: "ram@gmail.com",
        username: "ram"

    })
    res.send(usercreated);
});


app.get("/update", async function(req, res){
    let userupdate = await userModel.findOneAndUpdate({username: "prathaam"}, {name: "pratham shukla"}, {new:true})

    res.send(userupdate);
});


app.get("/read", async function(req, res){
    let userread = await userModel.find()

    res.send(userread);
});


app.get("/delete", async function(req, res){
    try {
        let user = await userModel.findOneAndDelete({name: "ram"});
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.send(user);
    } catch (err) {
        console.error("Error deleting user:", err);
        res.status(500).send("Error deleting user");
    }
});

app.listen(3000);