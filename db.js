const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/PORTFOLIO')

module.exports=mongoose.connection