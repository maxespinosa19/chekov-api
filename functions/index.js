import { onRequest } from "firebase-functions/v2/https";
import express from "express"
import cors from "cors"
import { getTasks, addTasks} from "./src/tasks.js";

const app = express();
app.use(cors());
app.use(express.json());

//routes:
app.get("/tasks/:uid", getTasks);
app.post("/tasks/:uid", addTasks);

export const api = onRequest(app) //exports cloud function
