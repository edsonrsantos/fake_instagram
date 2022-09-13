const { sequelize, Usuario } = require('../models');

Usuario.findAll({include:"amigos"}).then(
    data => {
        
      console.log(data[0].toJSON());
        //console.log(data.map( u => u.toJSON()));
        sequelize.close();
    }
)
/*
Usuario.create(
  {
   nome: "edson",
   email: "edson@ibm",
   senha: "aleatoria3"

  }
     
)
*/