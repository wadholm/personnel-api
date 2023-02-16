const express = require("express");
const cors = require('cors');
const morgan = require('morgan');
// const mongoose = require('mongoose');

const app = express();
const port = 1337;

app.use(cors());

// don't show the log when it is test
if (process.env.NODE_ENV !== 'test') {
    // use morgan to log at command line
    app.use(morgan('combined')); // 'combined' outputs the Apache style LOGs
}

app.use(express.json());

// Add a route
app.get("/", (req, res) => {
    const data = {
        data: {
            msg: "Hello World"
        }
    };

    res.json(data);
});

app.listen(port, () => {
    console.info(`Personnel API listening at port ${port}`)
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
