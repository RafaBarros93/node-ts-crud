import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import routes from "./routes/routes";

class App {
    public express: express.Application;

    public constructor() {
        this.express = express();

        this.miiddlewares();
        this.database();
        this.routes();
    }

    private miiddlewares(): void {
        this.express.use(express.json());
        this.express.use(cors());
    }

    private database(): void {
        mongoose.connect(
            "mongodb+srv://admin:123@cluster0-kgkln.mongodb.net/test?retryWrites=true",
            { useNewUrlParser: true }
        );
    }

    private routes(): void {
        this.express.use(routes);
    }
}

export default new App().express;
