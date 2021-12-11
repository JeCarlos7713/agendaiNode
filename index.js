const express = require('express');
const exphbs = require('express-handlebars');
const port = 3000;
const app = express();

// models
const conn = require('./db/conn');

// eslint-disable-next-line no-unused-vars
const Usuario = require('./models/Usuario');


app.engine('handlebars', exphbs.engine(
  { defaultLayout: 'main' },
  {partialsDir: 'views/partials'},
  ));
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.static('public'));

// routes
const cadastroUsuarioRoutes = require('./routes/cadastroUsuarioRoutes');

// receber resposta do body
app.use(
  express.urlencoded({
    extended: true
  })
);

// app.use Routes
app.get('/', (req, res) => {
  res.render('home');
});

app.use('/usuario', cadastroUsuarioRoutes);

conn
  .sync({ alter: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`Servidor iniciado com sucesso: http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(`Erro: ${err}`));
