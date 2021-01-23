const connnection = require('../config/connection');

let printQuestionMarks = (x) => {
    let array = [];
    for (var i = 0; i < x; i++) {
        array.push('?')
    }
    return array.toString();
}

let objectToSql = (x) => {
    var array = [];

    for (var key in object) {
        let val = object[key];
        if (Object.hasOwnProperty.call(object, key)) {
            if (typeof val === 'string' && val.indexOf(" ") >= 0) {
                val = "'" + val + "'";
            }
            array.push(key + "=" + val)
        }
    }


    return array.toString();
}

var ORM = {
    selectAll: function (tableInput, callback) {
        let query = "select * from " + tableInput + ";"
        connnection.query(query, function (err, res) {
            if (err) { throw err }
            callback(res)
        })
    },
    insertOne: function (tableInput, columns, values, callback) {
        let query = "insert into " + tableInput;

        query += " (";
        query += columns.toString();
        query += ") ";
        query += "values (";
        query += printQuestionMarks(values.length);
        query += ") ";

        console.log(query);

        connection.query(query, values, function (err, result) {
            if (err) {
                throw err;
            }

            callback(result);
        });

    },
    updateOne: function (table, columns, condition, callback) {
        var query = "update " + table;

        query += " set ";
        query += objectToSql(columns);
        query += " where ";
        query += condition;

        console.log(query);
        connection.query(query, function (err, result) {
            if (err) {
                throw err;
            }

            callback(result);
        });
    }

}

module.exports = ORM;