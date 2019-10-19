'use strict';
const uuid = require('uuid');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserProfiles',[{
            userId: 1,  
            firstName: 'Chrysostomos',
            lastName: 'daniel',
            countryId: 1,
            city: "nicosia",
            addressLine1: "test",
            postalCode: "21212",
            phoneNumber: "99999999"
    }], {})
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('UserProfiles', null, {}); 
  }
};