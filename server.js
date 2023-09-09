const express = require("express")
const PORT = 8000;
const rapperList = {
    "birthname": "John Douglas",
    "age": 45,
    "birthLocation": "Inglewood, California"
}

const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/api", (req, res) => {
    res.json(rapperList)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} for now.`)
})