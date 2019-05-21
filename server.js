const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./api/routes');

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

routes(router);

mongoose.connect('mongodb://localhost:27017/issues', { useNewUrlParser: true });
const connection  = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

app.use('/', router);

app.listen(4000, () => console.log('Express server running on port 4000'));