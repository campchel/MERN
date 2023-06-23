const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())

require('./config/mongoose.config')

const Routes = require('./routes/products.route')
Routes(app)


app.listen(port, () => console.log(`Connected to ${port}`) );