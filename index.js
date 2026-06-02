const express = require('express');
const app = express();
const PORT = 3000;

const dogRoutes = require('./routes/dogs')
const catRoutes = require('./routes/cats')

app.use( express.json())


app.use('/dogs', dogRoutes.default || dogRoutes);
app.use('/cats', catRoutes.default || catRoutes);

app.listen(
    PORT, () => console.log(`server is listening on http://localhost:${PORT}`)
);

