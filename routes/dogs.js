const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    console.log('dogs headers:', req.headers);

    const apiKey = req.get('apikey')

    if(apiKey !== 'secret'){
        return res.status(403).send({message: "Invalid API Key"})
    }

    res.status(200).send({
        name: "Izzy",
        breed: "Hungarian Vizsla",
        weight: "25kg"
    })
})

router.post('/:id', (req, res) => {
    const { id } = req.params;
    const { name, breed } = req.body || {};


    if (!name) return res.status(418).send({ message: "Dog must have a name" });
    if (!breed) return res.status(418).send({ message: "Dog must have a breed" });

    return res.status(201).send({
        name: name,
        breed: breed,
        weight: "11kg"
    });
});

module.exports = router;