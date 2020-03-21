const mongoose = require( "mongoose" );

module.exports = function( app ) {
  try {
    mongoose.connect( 'mongodb://localhost:27017/myapp', { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
    mongoose.set('useCreateIndex', true);
    mongoose.Promise = global.Promise;

    // Handle Ctrl + C
    process.on( "SIGINT", () => shutdown('SIGINT') );
    process.on( "SIGTERM", () => shutdown('SIGTERM') );
    process.on('uncaughtException', () => shutdown('uncaughtException'));

    console.log("Mongoose connection  open");

    if ( app ) {
      app.set( "mongoose", mongoose );
    }
  } catch (error) {
    console.log(error)
  }
};

function shutdown(signal) {

  mongoose.connection.close( function( ) {
    console.log("Mongo connection terminate via", signal);
    process.exit( 0 );
  } );
}