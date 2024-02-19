const express = require("express")
const cors = require("cors")
const app = express()

const contactRouter = require("./router/contact")



app.use(cors("*"))
app.use(express.json())
// app.use(express.static("uploads"))

app.use("/contact", contactRouter)


app.listen(5000, "0.0.0.0", () => {
  console.log("Server started on port 5000")
})
