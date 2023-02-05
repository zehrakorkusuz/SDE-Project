require("dotenv").config()

const express = require("express")
const app = express()

app.use(express.json())

app.listen(3000, () => console.log("Server Started"))



//https://www.c-sharpcorner.com/article/how-to-implement-chatgpt-in-nodejs/
// https://www.youtube.com/watch?v=FFMcqCYPbH8
