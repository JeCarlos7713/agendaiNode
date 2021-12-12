const express = require('express');
const cors = require('cors');
const exphbs = require('express-handlebars');
const port = 3000;
const app = express();

// models
const conn = require('./db/conn');

// eslint-disable-next-line no-unused-vars
const Usuario = require('./models/Usuario');

app.engine(
  'handlebars',
  exphbs.engine({ defaultLayout: 'main' }, { partialsDir: 'views/partials' })
);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.static('public'));

// Cors
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));


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

app.listen(port, () =>
  console.log(`servidor iniciado: http://localhost:${port}`)
);
