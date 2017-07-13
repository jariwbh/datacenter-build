var mongoose   = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://dbuser:pass#123@ds157702.mlab.com:57702/heroku_nx3z5524'); // connect to our database
