
//connect to mongoDB
mongoose.connect('mongodb+srv://<anonymous>:<anonymous>@logindb-mq5d7.mongodb.net/test?retryWrites=true');

mongoose.connection.once('open', function(){
	console.log('Connection has been made, now make fireworks');
}).on('error'.function(error){
	console.log('Connection error:', error);
});