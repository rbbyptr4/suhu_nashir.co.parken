const express = require("express")
const app = express()
const userRouter = require("./Router/user")

app.use(express.json())
app.use(userRouter)

app.listen(3001, () => console.log(`listening at PORT ` + 3001))