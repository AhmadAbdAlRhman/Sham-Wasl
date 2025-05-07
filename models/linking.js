const connectDB = require('../configs/db');

connectDB();


require('./cities');
require('./user');
require("./market");
require("./proudcts");
require("./search_history");
require("./tags");
require("./products_media");
require("./categories");
require("./product_tags");
require("./product_feedback");
require("./market_feedback");
require("./sponsorship");