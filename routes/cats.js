const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { // get request

    //log which the headers that are being requested
    console.log('cats headers:', req.headers);
    // very basic implementation of an apikey
    const apiKey = req.get('apikey');

    if (apiKey !== 'secret') {
        return res.status(403).send({message: 'Invalid API Key'})
    }
 // if the api key is in the header then a 200 status code is returned with
 // basic info
    res.status(200).send({
        name: "Sweep",
        breed: "Manx Cat",
        weight: "11kg"
    })
})
//post request

router.post('/:id', (req, res) => {
    const { id } = req.params; // uses header parameter for the id
    const { name, breed } = req.body || {}; //requires name and breed of cat
    // if either of the body params aren't included a status 418 is returned
    if (!name) return res.status(418).send({ message: "Cat must have a name" });
    if (!breed) return res.status(418).send({ message: "Cat must have a breed" });
    
    return res.status(201).send({
        name: name,
        breed: breed,
        weight: "11kg"
    });
});

module.exports = router;