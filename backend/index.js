const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

app.get('/api', (req, res) => {
    res.send({ message: 'Mange Monz!' });
    });

app.listen(3001, () => {
    console.log('Server listening on port 3001');
    }
);

