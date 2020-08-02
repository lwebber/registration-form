const express = require('express');

const router = Express.router();

router.get('/', (req, res) => {
    res.send("It works!");
});

module.exports = router;