const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
 
    _id: {type: Number},
    item: { type: String},
    category:{ type: String},
    subCategory:{ type: String}, 
    description: { type: String},
    video: { type: String},
    img:{ type: String},
    date: {type:Date, default :Date.now}, 
    price: {type: Number}
});

const Menu = mongoose.model("menu", menuSchema);

module.exports = Menu;
