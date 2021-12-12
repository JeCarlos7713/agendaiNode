const jwt = require('jsonwebtoken');

const createUserToken = async (user, req, res) => {
  const token = jwt.sign(
    {
      // Cria token
      nome: user.nome,
      id: user._id
    },
    'nossoscret'
  );

  // Return token
  res.status(200).json({
    message: 'Voce esta autenticado',
    token: token,
    userId: user._id
  });
};

module.exports = createUserToken;
