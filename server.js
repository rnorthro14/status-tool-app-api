const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./api/routes');
const config = require('./config/config.json');
const bcrypt = require('bcrypt');

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

routes(router);

const dbConnectUri = `mongodb://${config.dbuser}:${config.dbpassword}@ds227185.mlab.com:27185/${config.db}`;

mongoose.connect(dbConnectUri, { useNewUrlParser: true });
const connection  = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully ', dbConnectUri);
});

app.use('/', router);

app.listen(4000, () => console.log('Express server running on port 4000'));