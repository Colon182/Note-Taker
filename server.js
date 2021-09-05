const express = require('express');
const htmlRoutes = require('./routes/htmlR.js');
const apiRoute = require('./routes/api.js');

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.use('/', htmlRoutes);
app.use('/api', apiRoute)

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
