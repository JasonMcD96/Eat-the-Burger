//  Imports the orm and uses that to interact with the database
// This file gets imported into the the controller

let orm = require('../config/orm')

let burger = {
    all: function(callback){
        orm.selectAll('burgers', function(res){
            callback(res)
        });
    },
    insert: function(columns, values, callback){
        orm.insertOne('burgers', columns, values, function(res){
            callback(res);
        });
    },
    update: function(objColValues, condition, callback) {
        orm.updateOne('burgers', objColValues, condition, function(res){
            callback(res);
        });
    }
}

module.exports = burger