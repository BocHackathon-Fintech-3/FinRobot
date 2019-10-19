'use strict';
const uuid = require('uuid');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserInvestmentGroups',[{
            id: '1',  
            userId: '1',
            referenceNo: 'CUS',
            amount: 1000,
            amountPercentage: 2.50,
            status: 'C',
            paymentType: 'C',
            hash: '0x'

    }], {})
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('UserInvestmentGroups', null, {}); 
  }
};
