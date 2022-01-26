const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/product?readPreference=primary&directConnection=true&ssl=false';
// Prints "MongoServerError: bad auth Authentication` failed."
mongoose.connect(uri, {
  serverSelectionTimeoutMS: 5000
}).catch(err => console.log(err.reason));