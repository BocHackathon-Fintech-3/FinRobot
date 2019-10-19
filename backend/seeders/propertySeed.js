'use strict';
const uuid = require('uuid');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Properties',[{
            id: 1,  
            referenceNo: 'PR0001',
            title: 'One-Bedroom Apartment (No.105) in Finikoudes, Larnaca',
            totalAmount: 292000,
            estimationRent: 1200
    }, {
        id: 2,  
        referenceNo: 'PR0002',
        title: 'Two-Bedroom Apartment (No.301) in Kamares, Larnaca',
        totalAmount: 250000,
        estimationRent: 1050
    }, {
        id: 3,  
        referenceNo: 'PR0003',
        title: 'Three-Bedroom Apartment (A12) in Acropolis, Nicosia',
        totalAmount: 241000,
        estimationRent: 1100
    }], {})
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Properties', null, {}); 
  }
};