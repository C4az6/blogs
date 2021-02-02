import "reflect-metadata"; // this shim is required
import Koa = require('koa');
import { createExpressServer } from "routing-controllers";
import MainController from "./controllers/MainController";
const app = createExpressServer({
  controllers: [MainController]
});


app.listen(8080);