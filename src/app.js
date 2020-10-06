const express = require('express')
require('./db/mongoose')
const userRouter = require('../src/router/user');
const taskRouter = require('../src/router/task');

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

module.exports = app;   
