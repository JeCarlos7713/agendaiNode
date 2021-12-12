const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://localhost:27017/agendai');
  console.log('Conectou ao MongoDB com mongoose');
}

main().catch((err) => console.log(err));

module.exports = mongoose;
