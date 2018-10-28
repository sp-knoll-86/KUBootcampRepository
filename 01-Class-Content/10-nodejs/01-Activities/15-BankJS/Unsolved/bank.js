var command = process.argv[2];
var amount = process.argv[3];

var fs = require('fs');
let transactions = [];
let number = 0;
let dataArr = "";
// console.log(read('bank.txt'));
function TryThis (transactions) {
fs.readFile('bank.txt', "utf8", function (error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
        return console.log(error);
    }

    dataArr = data.split(", ");
    transactions = transactions.push(dataArr);
    console.log('dataArr: ' + dataArr);
    console.log('transactions inside read(): ' + transactions)
});
    return transactions;

    // We will then re-display the content as an array for later use.
    // console.log(dataArr);
};
    console.log("number" + number)
    console.log("kelsey wants to know" + dataArr)
    console.log('transactions: ' + transactions);
// var write = fs.writeFile("bank.txt", "data, more, etc", function(error){})
// var append = fs.appendFile("bank.txt", , function(err) {})