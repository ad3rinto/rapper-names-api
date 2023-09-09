const express = require("express")
const PORT = 8000;


const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} for now.`)
})