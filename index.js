const express = require('express');
const exphbs = require('express-handlebars');
const port = 8080;

const app = express();


// models
const conn = require('./db/conn');
// const Empreendedor = require('./models/Empreendedor');
const Usuario = require('./models/Usuario');

// routes
const cadastroUsuarioRoutes = require('./routes/cadastroUsuarioRoutes');

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

app.use('/usuario', cadastroUsuarioRoutes);

// app.use Routes
app.get('/', (req, res) => {
  res.render('layouts/main');
})



conn.sync({ alter: true })
    .then(() => {
      app.listen(port, () => {
        console.log(`Servidor iniciado com sucesso: http://localhost:${port}`)
      });
})
.catch((err) => console.log(`Erro: ${err}`))
