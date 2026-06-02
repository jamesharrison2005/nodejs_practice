const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    
    console.log('cats headers:', req.headers);

    const apiKey = req.get('apikey');

    if (apiKey !== 'secret') {
        return res.status(403).send({message: 'Invalid API Key'})
    }

    res.status(200).send({
        name: "Sweep",
        breed: "Manx Cat",
        weight: "11kg"
    })
})

router.post('/', (req, res) => {
    const { name, breed } = req.body || {};

    if (!name) return res.status(418).send({ message: "Cat must have a name" });
    if (!breed) return res.status(418).send({ message: "Cat must have a breed" });

    return res.status(201).send({
        name: name,
        breed: breed,
        weight: "11kg"
    });
});

module.exports = router;