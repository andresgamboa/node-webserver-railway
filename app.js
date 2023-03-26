require('dotenv').config();

const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT; //Al colocarlo como variable de entorno el puerto, si ya existe el puerto, lo usa, sino, me usa el que me crea automaticamente mi hosting

//HANDELBARS
app.set('view engine', 'hbs'); //por defecto busca una carpeta que se llama views en la raiz del programa
hbs.registerPartials(__dirname + '/views/partials');


//Servir contenido estatico
app.use(express.static( 'public' ) );


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Camilo Gamboa',
        titulo: 'Curso de node'
    });   //CONTROLADOR DEL HOME.HBS
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Camilo Gamboa',
        titulo: 'Curso de Node'

    });
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Camilo Gamboa',
        titulo: 'Curso de Node'

    });
})

app.get('*', (req, res) => {
    res.render('404');  // la ubicacion debe ser absoluta, dirname me obtiene el path de donde tengo instalada la aplicacion y concateno la direccion de la carpeta
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })