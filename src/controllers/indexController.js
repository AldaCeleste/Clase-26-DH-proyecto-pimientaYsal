const express = require('express');
const path = require('node:path');
const app = express();
const menues = require('../dataBase/menu');


const indexController = {
    index:('/', (req, res) => {
        res.render(path.resolve(__dirname, '../views/index.ejs'), { menues });
    }),

}




module.exports = indexController;



