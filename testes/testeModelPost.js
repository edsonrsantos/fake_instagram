const { sequelize, Post } = require('../models');

Post.findAll({include:['comentarios','usuario']}).then(
    dados => {
        console.log(dados[0].toJSON());
        sequelize.close();
    }
)

Post.create(
 {
  texto: "Edson",
  img: "erer",
  usuarios_id: 1,
  n_likes: 1
 }
)


