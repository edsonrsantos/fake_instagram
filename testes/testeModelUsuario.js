const { sequelize, Usuario } = require('../models');

Usuario.findAll().then(
    data => {
        console.log(data.map( u => u.toJSON()));
        sequelize.close();
    }
)

Usuario.create(
  {
   nome: "edson",
   email: "edson@ibm",
   senha: "aleatoria3"

  }
     
)