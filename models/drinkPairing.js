const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const drinkPairingSchema = new Schema({
 
    _id: {type: Number},
    name: {type: String},
    image: {type: String},
    apetizers:{type: Array},
    mainCourses:{type: Array},
    desserts:{type: Array},
    drinks:{type: Array}
});

const DrinkPairing = mongoose.model("drinkPairing", drinkPairingSchema);

module.exports = DrinkPairing;
