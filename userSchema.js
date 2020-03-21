const mongoose = require( "mongoose" );

const Schema = mongoose.Schema;

const userSchema= new Schema({
  userId: {
    type:String,
    required:true,
    unique:true
  },
  chips: { type:Number },
  date: String,
  isVerified: Boolean
}, {
  timestamps: true,
});

module.exports = mongoose.model('Users',userSchema);