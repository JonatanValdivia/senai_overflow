'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //Pequisa: addColumn              Por padrão, o id é criado no singular, evidenciando a ideia de "apenas um usuário com seu respectivo id"
    queryInterface.addColumn("posts", "user_id", {
      type: Sequelize.INTEGER,
      references:{
        model: "users",
        hey: "id"
      }
    })
  },


//Caso quisermos remover a coluna
  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn("posts", "user_id",)
  }
};
