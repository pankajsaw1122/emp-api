const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const response = require('./common/sendresponse');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static((path.join(__dirname, 'public'))));

app.use('/employee', require('./routes/employee'));

app.use(response.get404);

app.use((error, req, res, next) => {
    console.log(error);
    const statusCode = error.statusCode || 500;
    const message = error.message || 'Something went wrong please try again later';
    res.status(200).json({ status: statusCode, error: true, message: message, data: {} });
});

app.listen(8080);
