const express = require('express');
const app = express();
require ('dotenv').config();
const port = process.env.PORT || 3000;
const morgan = require('morgan');
const cors = require('cors');

//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/api/users', (req,res) => {
    try {
        res.status(200).json('ok')
    } catch (error) {
        res.status(500).json(error);
    }
});
//Mandar informacion al back por 'query'
app.get('/api/userById', (req,res) => {
    try {
        const data = req.query;
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
});
//Mandar informacion al back por 'params'
app.get('/api/userByUrl/:id', (req,res) => {
    try {
        const data = req.params;
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
});
//Mandar informacion al back por 'body'
app.post('/api/users', (req,res) => {
    try {
        const user = req.body;
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error);
    }
});

app.listen(port, () => {
    console.log(`estamos escuchando el puerto ${port}`);
});