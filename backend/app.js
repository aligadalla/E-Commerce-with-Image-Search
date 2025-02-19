const express = require('express');

const searchRoutes = require('./routes/search');

const app = express();

app.use('/search', searchRoutes);

app.listen(5000, () => console.log("Listening on port 5000"));