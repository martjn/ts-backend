import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import stringsController from "./controllers/strings";
import productsController from './controllers/products';
import productlistController from './controllers/productlist';
import parcelmachinesController from './controllers/parcelmachines';
import eleringController from './controllers/elering';
import makseController from './controllers/makse';

const app: Express = express();

app.use(cors({
    origin: ['http://localhost:3006']
}));

app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use('/', stringsController);
app.use('/', productsController);
app.use('/', productlistController);
app.use('/', parcelmachinesController);
app.use('/', eleringController);
app.use('/', makseController);

app.listen(3000,() => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});