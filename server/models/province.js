// app/models/bear.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ProvinceSchema   = new Schema({
    name: String
});

module.exports = mongoose.model('Province', ProvinceSchema);

