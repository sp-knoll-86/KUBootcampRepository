var orm = require("./config/orm.js");

var data = orm.selectWhere("parties", "party_type", "grown-up", function(result) {
    var data = result;
    console.log(data);
});

 // Data is undefined. Why?
