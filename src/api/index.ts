import express, { Express } from "express";

import { Server } from "./server.config";
import {
    categoryRouter,
    productRouter
} from "./routers/index";

export default class API {
    private app: Express;

    constructor() {
        this.app = express();
    }

    start() {
        const server = new Server({ appConfig: this.app });

        server.addRouter("/api/product/category", categoryRouter);
        server.addRouter("/api/product", productRouter);

        server.init();
    }
}


