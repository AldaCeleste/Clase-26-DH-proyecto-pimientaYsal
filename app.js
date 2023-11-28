const express = require('express');
const path = require('node:path');
const app = express();

const rutaIndex= require('./src/routers/index');
const rutaDetalleMenu = require('./src/routers/detalleMenu');


const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('Servidor funcionando');
});


app.use ('/', rutaIndex);
app.use ('/detalleMenu', rutaDetalleMenu);