const express = require("express");
const UserModel = require("../models/model");
const app = express();

app.get("/users", async (request, response) => {
    const users = await UserModel.find({});

    try {
        response.send(users);
    } catch (error){
        response.status(500).send(error);
    }
});

app.post("/users", async (request, response) => {
    const users = new UserModel(request.body);

    try{
        await users.save();
        response.send(users);
    }catch (error) {
        response.status(500).send(error);
    }
});

app.patch("/users/:id", async (request, response) => {
    try{
        await UserModel.findByIdAndUpdate(request.params.id, request.body);
        await UserModel.save();
        response.send(users);
    } catch(error){
        response.status(500).send(error);
    }
});

app.delete("/users/:id", async (request, response) => {
    try{
        const users = await UserModel.findByIdAndDelete(request.params.id);

        if (!users) response.status(404).send("El registro no existe");
        response.status(200).send();
    }catch (error){
        response.status(500).send(error);
    }
});

module.exports = app;