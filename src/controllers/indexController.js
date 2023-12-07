const express = require('express');
const path = require('node:path');
const menues = require('../dataBase/menu');
const about = require('../dataBase/about');


const indexController = {
    index:((req, res)=> {
        res.render(path.resolve(__dirname, '../views/index.ejs'), { menues });

        } ),
}






module.exports = indexController;



