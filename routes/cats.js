const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send({
        name: "Sweep",
        breed: "Manx Cat",
        weight: "11kg"
    })
})

module.exports = router;