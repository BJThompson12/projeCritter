//connection instance live here 
const mongoose = require('mongoose');

mongoose.set('strictQuery', false)

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/project3DB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('connectedtomongodb'))

module.exports = mongoose.connection;