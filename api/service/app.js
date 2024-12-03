import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";

import initializeRoutes from "./routers/index.js";

const initialize = (app) => {
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    mongoose.connect(process.env.MONGO_CONNECTION);
    initializeRoutes(app);
}
export default initialize;