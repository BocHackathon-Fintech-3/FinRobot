'use strict';
const uuid = require('uuid');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let userId = uuid.v1();
    return queryInterface.bulkInsert('Users',[{
            id: 1,  
            email: 'daniel.chrysostomos@gmail.com',
            password: '$2a$10$doRRCE4jgmXEQcB.wwpdm.jrDh94mM31mgdpl01aPPaPVQKdj3wg2',
            verified: 1,
            verifiedCode: 2421,
            createdAt: new Date(),
            updatedAt: new Date()  
    }], {})
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {}); 
  }
};