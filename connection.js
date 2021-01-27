/* const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://author1234:author1234@websiteproject.t0pmb.mongodb.net/websiteproject?retryWrites=true&w=majority",{ useNewUrlParser: true});

mongoose.connection.once('open', function(){
    console.log('connection successful')
}).on('error', function(error){

    console.log('error is ', error)
}) */

const mongoose=require('mongoose');

module.exports= () => {
  mongoose.Promise = global.Promise;
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  // mongoose.connect(`mongodb://nodeTut:${process.env.MONGO_PASS}@meetupme-shard-00-00-5nald.mongodb.net:27017,meetupme-shard-00-01-5nald.mongodb.net:27017,meetupme-shard-00-02-5nald.mongodb.net:27017/test?ssl=true&replicaSet=meetupME-shard-0&authSource=admin&retryWrites=true`, options);

  mongoose.connect(`mongodb+srv://author1234:<password>@websiteproject.t0pmb.mongodb.net/<dbname>?retryWrites=true&w=majority`, options);

 
  mongoose.connection
  
    .once('open', () => console.log('MongoDb running'))
 
    .on('error', err => console.log(err));
  mongoose.set('debug', true);
};

