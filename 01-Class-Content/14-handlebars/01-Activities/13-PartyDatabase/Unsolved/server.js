var orm = require("./config/orm.js");

orm.allNames("party_name", "parties");

orm.allNames("client_name", "clients");

orm.grownUpParty("parties", "party_type", "grown-up");

orm.allClientsAndParties(["client_name", "party_name"], "clients", "parties", "id", "client_id");