const express = require('express');
const path = require('node:path');
const app = express();
const menues = require('../dataBase/menu');

const detalleMenuController = {
    index: (req, res) => {
        let {idMenu}= req.params;
        res.render(path.resolve(__dirname, '../views/detalleMenu.ejs'), { menues , idMenu });
    },

}




module.exports = detalleMenuController;