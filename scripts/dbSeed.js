const mongoose = require("mongoose");
const db = require("../models");
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/perfectServer"
  );
  
require('./drinkPairings')(db);
require('./foodPairings')(db)
require('./menu')(db)