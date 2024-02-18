import express  from "express";
import "dotenv/config"
import { ConectionDb } from "./config/mongDb";
import { router } from "./routes";

const App = express()
ConectionDb.start()

App.use(express.json())

App.get("/",(req, res)=>{res.send("teste")})

App.use(router)

App.listen(process.env.PORT, ()=>console.log("server running"))

