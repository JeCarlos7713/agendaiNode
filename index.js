const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 8080;

// models
const conn = require('./db/conn');
const Empreendedor = require('./models/Empreendedor');
const Usuario = require('./models/Usuario');

// routes


// template engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// receber resposta do body
app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(express.json());
// public path
app.use(express.static('public'));

// app.use Routes
app.get('/', (req, res) => {
  res.render('home');
})


conn.sync()
    .then(() => {
      app.listen(port, () => {
        console.log(`Servidor iniciado com sucesso: http://localhost:${port}`)
      });
})
.catch((err) => console.log(err))
