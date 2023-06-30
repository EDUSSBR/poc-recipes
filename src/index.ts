import express from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";
import {recipesRoute} from "./routes";
import { errorMiddleware } from "./middlewares/error.middleware";
dotenv.config()

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(cors())
app.use(recipesRoute)
app.use(errorMiddleware)


app.listen(PORT, ()=>console.log(`App listening at ${PORT}`))