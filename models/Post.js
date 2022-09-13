module.exports = (sequelize, DataTypes) => {
  
  let post = sequelize.define(
    'Post',
     {
      id:{
         type: DataTypes.INTEGER,
         primaryKey: true,
         allowNull: false
      },
      texto: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      img:{
        type: DataTypes.STRING(100)
      },
      usuarios_id: {
      type: DataTypes.INTEGER,
      allowNull: false
      },
    n_likes:{
         type: DataTypes.INTEGER
         
    }
  
    },
    {
        tableName: 'posts',
        timestamps: false
    }
   )

   //próximo passo fazer relacionamento 1 pra muitos
   //um post tem muitos comentários 
   //e um comentário pertence a um post.
   //relacionamento de 1 pra muitos.
  
   post.associate = (models) => {
      post.hasMany(models.Comentario,{foreignKey:'posts_id', as:'comentarios'}), //post.hasMany => 1 post tem muitos comentários
      post.belongsTo(models.Usuario,{foreignKey:'usuarios_id', as:'usuario'}) // post.belongs => um post pertence a um usuario 
  }
   return post
}

