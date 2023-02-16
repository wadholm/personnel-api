const express = require('express');

const router = express.Router();

// get all employees
router.get('/', (req, res) => {
    const data = {
        data: {
            msg: "get all employees"
        }
    };

    res.json(data);
});

// add a new employee
router.post('/', (req, res) => {
    const data = {
        data: {
            msg: "add a new employee"
        }
    };

    res.json(data);
});

// remove an employee
router.delete('/:email', (req, res) => {
    const data = {
        data: {
            msg: "remove an employee"
        }
    };

    res.json(data);
});

module.exports = router;
