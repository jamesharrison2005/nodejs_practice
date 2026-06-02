const express = require('express'); // import express framework
const app = express(); // creates an express application
const PORT = 3000; // port number 

const dogRoutes = require('./routes/dogs') // loads module in directory
const catRoutes = require('./routes/cats')

//middleware - intercepts http requests and parses to json
app.use( express.json())

//any request starting with the prefix will be routed to object referenced
app.use('/dogs', dogRoutes.default || dogRoutes);
app.use('/cats', catRoutes.default || catRoutes);

//initialise server and wait for incoming requests.
app.listen(
    PORT, () => console.log(`server is listening on http://localhost:${PORT}`)
);

