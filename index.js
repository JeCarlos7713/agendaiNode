const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;

const conn = require('./db/conn');
const Empreendedor = require('./models/Empreendedor');
const empreendedorRoutes = require('./routes/empreendedorRoutes');

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(express.json());
app.use(express.static('public'));

app.use('/empreendedor', empreendedorRoutes);

conn.sync()
    .then(() => {
      app.listen(port, () => {
        console.log(`Servidor iniciado com sucesso: http://localhost:${port}`)
      });
})
.catch((err) => console.log(err))
