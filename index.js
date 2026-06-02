const express = require('express');
const app = express();
const PORT = 8080;

app.use( express.json())

app.get('/dog', (req, res) => {
res.status(200).send({
    breed: 'Hungarian Vizsla',
    weight: '25kg'
})
});

app.post('/dog/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body || {};

    if (!name) {
        return res.status(418).send({ message: 'We need a dog name' });
    }

    res.send({
        breed: `Hungarian Vizsla called ${name} with an id of ${id}`,
    });
})

app.listen(
    PORT, () => console.log(`server is listening on http://localhost:${PORT}`)
)

