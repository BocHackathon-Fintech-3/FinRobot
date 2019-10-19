const autoNumberSchemaModel = require("./../../models").AutoNumberSchema;
    
module.exports = {
    
     getNextSequence: async(code, conn=null) => {
         try {
             
            const autoNumberSchema = await autoNumberSchemaModel.findOne({
                where: {
                    code: code
                }
            })
            
            if(!autoNumberSchema) {
                throw new Error(`Auto Number Schema not found`);
            }
             
            let num = "";
            
            if(autoNumberSchema.prefix) {
                num += autoNumberSchema.prefix;
            }

            let seq = autoNumberSchema.seqNo + 1,
                formatCount = autoNumberSchema.format.toString().length,
                seqCount = seq.toString().length, 
                newForm = autoNumberSchema.format.toString().substring(0, formatCount - seqCount);

            newForm = newForm + seq;
            num += newForm;

            if(autoNumberSchema.postfix) {
                num += autoNumberSchema.postfix;
            }
             
            const affectedRow = await autoNumberSchemaModel.update({
                seqNo: seq
            }, {
                where: {
                    code: code
                },
                transaction: conn
            });
             
             if(!affectedRow[0]) {
                 throw new Error(`Failed to update Auto Number Schema`)
             }
                
             return num;

         } catch(error) {
             throw error;
         }
    }
   
};