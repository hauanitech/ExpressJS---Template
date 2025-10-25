import express from "express";
import { PORT } from "./core/config.js";


const app = express();


app.get("/", (request, response)=>{
    response.send("Root Endpoint Working");
})

app.listen(PORT, ()=>{
    console.log(`App is running on port : http://localhost:${PORT}`);
})


