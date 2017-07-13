var mongoose   = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://dbuser:dbpassword@ds157342.mlab.com:57342/heroku_4p9ggb81'); // connect to our database