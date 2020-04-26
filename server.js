const express = require('express');
const mongoose= require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/Items')

// git chnges

const app = express();

//BodyParser MiddleWire
app.use(bodyParser.json());

// Db config 
const db = require('./config/keys').mongoURI

// Connect to db

mongoose
    .connect(db, { useUnifiedTopology: true })
    .then(() => console.log('Database is connected'))
    .catch(err => console.log(err))
// Use Routes

app.use('/api/items', items);

const port  = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));