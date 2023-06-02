const express = require("express");
const notesRouter = express.Router();

notesRouter.get("/",(req,res)=>{
    res.send("Get notes")
});

notesRouter.post("/",(req,res)=>{
    res.send("post notes")
});

module.exports = notesRouter;