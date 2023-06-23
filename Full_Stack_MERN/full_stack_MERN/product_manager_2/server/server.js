const express = require('express');
const app = express();
require('dotenv').config();
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./config/mongoose.config')

const Routes = require('./routes/product.routes')
Routes(app)


app.listen(port, () => console.log(`Connected to ${port}`) );