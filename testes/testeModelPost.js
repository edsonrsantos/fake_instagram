const { sequelize, Post } = require('../models');

Post.findAll().then(
    data => {
        console.log(data.map( u => u.toJSON()));
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


