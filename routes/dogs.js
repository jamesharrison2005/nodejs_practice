const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send({
        name: "Izzy",
        breed: "Hungarian Vizsla",
        weight: "25kg"
    })
})

module.exports = router;