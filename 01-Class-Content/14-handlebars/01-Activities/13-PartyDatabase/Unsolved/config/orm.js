var connection = require("./connection.js");

var orm = {
    allNames: function (colToSearch, tableInput) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [colToSearch, tableInput], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    grownUpParty: function (tableInput, colToSearch, valOfCol) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    allClientsAndParties: function (whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) {
        var queryString = "SELECT ?? FROM ?? AS c";
        queryString += " LEFT JOIN ?? AS p";
        queryString += " ON c.?? = p.??";
        connection.query(queryString, [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
};

module.exports = orm;