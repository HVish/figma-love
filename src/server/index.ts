// import React from 'react';
import path from 'path';
import * as express from 'express';
import cors from 'cors';
import chalk from 'chalk';
import manifestHelpers from 'express-manifest-helpers';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import paths from '../../config/paths';
import { configureStore } from '../shared/store';
import apiRoutes from './api/routes';
import errorHandler from './middleware/errorHandler';
import serverRenderer from './middleware/serverRenderer';

require('dotenv').config();

const app = express.default();

// Use Nginx or Apache to serve static assets in production or remove the if() around the following
// lines to use the express.static middleware to serve assets for production (not recommended!)
app.use(paths.publicPath, express.static(path.join(paths.clientBuild, paths.publicPath)));

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// handle api only requests
app.use('/api', apiRoutes);

const addStore = (
    _req: express.Request,
    res: express.Response,
    next: express.NextFunction | undefined
): void => {
    res.locals.store = configureStore({});
    if (typeof next !== 'function') {
        throw new Error('Next handler is missing');
    }
    next();
};

app.use(addStore);

const manifestPath = path.join(paths.clientBuild, paths.publicPath);

app.use(
    manifestHelpers({
        manifestPath: `${manifestPath}/manifest.json`,
    })
);

app.use(serverRenderer());

app.use(errorHandler);

const PORT = process.env.PORT || 8500;
const DB_URI = process.env.DB_URI || 'mongodb://localhost/figma-love';

// connect to database
mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(
            `[${new Date().toISOString()}]`,
            chalk.blue(`App is running: http://localhost:${PORT}`)
        );
    });
});

export default app;
