import express from "express"
import cors from "cors"
import MasterBarangRoute from "./route/MasterBarangRoute.js";

const app = express()
app.use(cors());
app.use(express.json());
app.use(MasterBarangRoute)

app.listen(5000, () => console.log("server is running..."))