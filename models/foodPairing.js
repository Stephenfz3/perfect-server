const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodPairingSchema = new Schema({
 
    _id: {type: Number},
    name: {type: String},
    image: {type: String},
    apetizers:{type: Array},
    mainCourses:{type: Array},
    desserts:{type: Array},
    drinks:{type: Array}
});

const FoodPairing = mongoose.model("foodPairing", foodPairingSchema);

module.exports = FoodPairing;
