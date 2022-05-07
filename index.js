const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config({ path: './config/.env' })
const cors = require('cors');

const app = express();
const URL = process.env.MONGODB_URI.toString();
const PORT = process.env.PORT || 8500;



mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}).catch(err => {console.error(err)});



app.use(bodyParser.json());
app.use(cors());
app.get('/', (req, res,) => {
    res.send('Hello World');
});
app.use('/api', require('./routes/apiRoute'));

app.use(function(req, res, next) {
    res.status(404);

    // respond with json
    if (req.accepts('json')) {
      res.json({ error: 'Page Not found' });
      return;
    }

    // default to plain-text. send()
    // res.type('txt').send('Not found');
});
