const express = require("express")
const PORT = 8000;
const rapperList = {
    "50 cents": {
        "birthName": "Curtis James Jackson",
        "biggest hit": "In da club"
    },
    "cardi B": {
        "birthName": "Belcalis Almanaz",
        "biggest hit": "Bodak Yellow"
    },
    "chance the rapper": {
        "birthName": "Chancelor Jonathan Bennet",
        "biggest hit": "No problem"
    },
    "dr. dre": {
        "birthName": "Andre Romelle Young",
        "biggest hit": "No Diggity"
    },
    "drake": {
        "birthName": "Aubre Drake Graham",
        "biggest hit": "God's plan"
    },
    "grandmaster Flash": {
        "birthName": "Joseph Sadller",
        "biggest hit": "The Message"
    },
    "ice cube": {
        "birthName": "O'shea Jackson",
        "biggest hit": "It was a good day"
    },
    "queen latifah": {
        "birthName": "Dana Elaine Owens",
        "biggest hit": "U.N.I.T.Y"
    },
    "snoop dog": {
        "birthName": "Calvin Cordozar Broadus Jnr.",
        "biggest hit": "Drop it lit its hot"
    },
    "the notorious b.i.g": {
        "birthName": "Christopher George Laroe Wallace",
        "biggest hit": "Mo money mo problems"
    },
    "tupac": {
        "birthName": "Tupac Amaro Shakur",
        "biggest hit": "Dear Mama"
    }


}

const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/api", (req, res) => {
    res.json(rapperList)
})

app.get("/api" /: rapperName, (req, res) => {
    const realName = req.body.rapperName.toLowerCase();
    if (realName in rapperList) {
        res.json(rapperList[realName])
    }
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} for now.`)
})

