const express = require("express");
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const app = express();
const port = 1337;

app.use(cors());

// don't show the log when it is test
if (process.env.NODE_ENV !== 'test') {
    // use morgan to log at command line
    app.use(morgan('combined')); // 'combined' outputs the Apache style LOGs
}

app.use(express.json());

// Routes
const home = require('./api/routes/home');
const employees = require('./api/routes/employees');

// Add routes
app.use('/', home);
app.use('/employees', employees);


// Connect Mongoose
let dsn;

// Test db
if (process.env.NODE_ENV === 'test') {
    dsn = process.env.DSN_TEST || "mongodb://127.0.0.1:27017/test";
} else {
    dsn = process.env.DSN || "mongodb://127.0.0.1:27017/employees";
}

mongoose.connect(
    dsn,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
// Start up server
    .then(() => {
        app.listen(port, () => {
            console.log(`Personnel API listening on port ${port}!`);
        });
    })
    .catch((err) => {
        console.log(err);
    });

app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }

    return res.status(err.status || 500).json({
        "errors": [
            {
                "status": err.status,
                "message":  err.message
            }
        ]
    });
});
