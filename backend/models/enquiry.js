const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const enquirySchema = new Schema({
 customer_number: String,
 discription: String,
 created: Date
});

module.exports = mongoose.model('Enquiry', enquirySchema);

