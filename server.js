const express = require("express");
const app = express();
const rutas = require("./app/routes/route.js");
const mongoose = require("mongoose");

app.use(express.json());

mongoose.connect(
    "mongodb+srv://mario:Hello123.w@cluster0.5ibon.gcp.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
);

app.use(rutas);

app.listen(3000, () => {
    console.log("Esta corriendo");
});