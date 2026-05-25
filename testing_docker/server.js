import express from "express"

const app = express();

app.listen(3000, () => {
  console.log("Server running on PORT: 3000")
})


app.get("/", (req, res) => {
  res.status(200).json({
    status: true,
    message: "Hey there !"
  })
})

app.get("/data", (req, res) => {
  res.status(200).json({
    status: true,
    message: "User data endpoint"
  })
})

export default app;
