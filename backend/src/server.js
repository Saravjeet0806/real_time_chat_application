import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());


app.get("/", (req, res)=>{
    res.send("hello world");
})

app.get("/api/login", (req, res)=>{
    res.send("login route");
})


app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log("Server is running on port ",PORT);
})