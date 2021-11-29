import 'dotenv/config';

import express, {
    Application,
    Request,
    Response,
    NextFunction,
    application,
} from 'express';
import cors from 'cors';
import responseTime from 'response-time';
import { json } from 'body-parser';
import router from './api/v1/routes/routes';

const app: Application = express();
const port: number = parseInt(process.env.PORT as string, 10);
const host: string = process.env.HOST || '';
const bodyParser = require('body-parser');

app.use(json());
app.use(cors());
app.use(responseTime());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/v1', router);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).end('not found');
});

app.listen(port, () => {
    console.log(`Server started at ${host}`);
});
