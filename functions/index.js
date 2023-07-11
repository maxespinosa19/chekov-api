import { onRequest } from "firebase-functions/v2/https";
import express from "express"
import cors from "cors"
import { getTasks, addTasks, updateTask} from "./src/tasks.js";

const app = express();
app.use(cors());
app.use(express.json());

//routes:
app.get("/tasks/:uid", getTasks);
app.post("/tasks/:uid", addTasks);
app.patch("/tasks/:uid", updateTask);

export const api = onRequest({maxInstances: 10},app) //exports cloud function
