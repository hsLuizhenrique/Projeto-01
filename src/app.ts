import dotenv from 'dotenv';             
import express, { json } from "express";
import { routes } from "./routes/routes";

const server = express();
dotenv.config();

server.use(json());
server.use(routes);

server.listen(process.env.PORT);
