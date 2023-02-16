const express = require('express');

const router = express.Router();

// home
router.get('/', (req, res) => {
    const data = {
        data: {
            message: "Personnel API"
        }
    };

    res.json(data);
});

module.exports = router;
