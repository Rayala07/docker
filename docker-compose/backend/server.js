import express from "express"
import morgan from "morgan"

const app = express();

app.use(morgan())
app.use(express.static('public'))

app.listen(3000, () => {
    console.log("Server is running at port 3000");
})

app.get("/api/health", (req, res) => {
    res.status(200).json({
        status: true,
        message: "Working."
    })
})

app.get("/api/users", (req, res) => {
    res.status(200).json({
        status: true,
        message: "Users list.",
        users: [
            {
                name: "Alice",
                email: "alice@work.com"
            },
            {
                name: "Bob",
                email: "bob@work.com"
            },
            {
                name: "Charlie",
                email: "charlie@work.com"
            },
            {
                name: "Nunu",
                email: "nunu@work.com"
            },
            {
                name: "Jhontu",
                email: "jhontu@work.com"
            }
        ]
    })
})

app.get("*name", (req, res) => {
    res.sendFile("public/index.html", { root: __dirname })
})