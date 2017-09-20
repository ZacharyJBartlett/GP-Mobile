var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClientsSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
  	type: String,
  },
  address: {
  	type: String,
  },
  city: {
  	type: String,
  },
  zip: {
    type: Number,
  },
});

var Clients = mongoose.model('Clients', ClientsSchema);

module.exports = Clients;