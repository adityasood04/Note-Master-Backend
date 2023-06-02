const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("../routes/userRoutes");
const notesRouter = require("../routes/notesRoutes");


const app = express();

app.use("/users", userRouter);
app.use("/notes", notesRouter);

mongoose.connect("mongodb+srv://adityasood04:mes0JSjjfaNutnKU@cluster0.acbn9hy.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {

        app.listen(
            5000, () => {
                console.log("Server started at port 5000");
            }
        );
    })
    .catch((error) => {
        console.log(error);
    })
