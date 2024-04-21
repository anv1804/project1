import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();
// const app = express.createServer();
app.use(cors());

app.use(express.json());
                        mongoose.connect(process.env.CONNECTION_STRING_MONGODB).then(() => {
                    console.log('Connected!');
});
                        const port = process.env.PORT || 3000;

import routerUser from './routers/user.router.js';
import routerTable from './routers/table.router.js';

app.use('/table', routerTable);
app.use('/user', routerUser);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
