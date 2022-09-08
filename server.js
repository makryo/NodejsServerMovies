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

const host = '0.0.0.0';
const port = process.env.port || 5000;

app.listen(port, host, () => {
    console.log("Esta corriendo");
});
