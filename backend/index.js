const express = require('express');
const app = express();
const cors = require('cors');
const {main} = require('./prisma/index.js');




app.use(cors())
const PORT = 3001;


main().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    });
}).catch(err => {
    console.error("Erreur lors de l'exécution de main:", err);
});




