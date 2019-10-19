'use strict';
const uuid = require('uuid');

module.exports = {
  up: (queryInterface, Sequelize) => {
    let autoNumberSchemaId = uuid.v1();
    return queryInterface.bulkInsert('AutoNumberSchemas',[{
            id: autoNumberSchemaId,  
            code: 'CUS',
            prefix: 'CUS',
            postfix: null,
            format: '0000',
            seqNo: 1
    }, {
        id: uuid.v1(),  
        code: 'INV',
        prefix: 'INV',
        postfix: null,
        format: '0000',
        seqNo: 1
    }], {})
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('AutoNumberSchemas', null, {}); 
  }
};