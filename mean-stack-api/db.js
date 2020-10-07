const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/postManagerDB', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}, (err) => {
  if(err) {
    console.log('Error while connecting database:' + JSON.stringify(err, undefined, 2));
  } else {
    console.log('Mongodb connection successful');
  }
}) 