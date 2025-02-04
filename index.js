const express = require('express');
const app = express();
app.use(express.json());

const routes = require('./routes/routes')
app.use('/api', routes);
app.use('/',(req, res)=>{
    res.send('API is working correctlly')
}
require('dotenv').config();

const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString);
const Database = new mongoose.Connection;

Database.on('error', (error) => {
    console.log('error', error);
})

Database.once('Connected', () => {
    console.log('Connected');
})

app.listen(4000, () => {
    console.log(`Server running at ${4000}`)
})
