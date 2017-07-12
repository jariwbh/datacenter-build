// app/models/bear.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PointSchema   = new Schema({
    users: [{type: Schema.ObjectId, ref: 'person' }],
    province: String,   
    area: String,   
    district: String,  
    points: Number, 
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Point', PointSchema);

