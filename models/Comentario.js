module.exports = (sequelize, DataTypes) => {
  
     let comentario = sequelize.define(
        'Comentario',
        {
       id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
       },
       texto: {
       type: DataTypes.STRING,
       allowNull: false
       },
       usuarios_id: {
        type: DataTypes.INTEGER,
        allowNull: false
       },
       posts_id: {
        type: DataTypes.INTEGER,
        allowNull: false
        }
    },
    {
     tableName: "comentarios",
     timestamps: false
    }
 )
    comentario.associate = (models) => {  // comentario.belongsTo => comentário pertence a um post 
         comentario.belongsTo(models.Post, {foreignKey:'posts_id', as:'post'})          // belongsTo => 1 comentário pertece a 1 post
         comentario.belongsTo(models.Usuario, {foreignKey:'usuarios_id', as:'usuario'}) // belongsTo => 1 comentário pertece a 1 usuário

    }
      return comentario

}


    


      


