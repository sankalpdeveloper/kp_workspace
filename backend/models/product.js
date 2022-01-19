const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productSchema = new Schema({
 item_name: String,
 item_category: String,
 item_price: Number,
 item_available: Boolean,
 item_delivery_capacity: Number,
 image_url: String,
 modified: Date,
 created: Date
});

module.exports = mongoose.model('Product', productSchema);

