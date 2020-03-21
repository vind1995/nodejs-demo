const mongoose = require( "mongoose" );

const Schema = mongoose.Schema;

const users= new Schema({
  userId: {
    type:String,
    required:true,
    unique:true
  },
  chips: { type:Number },
  date: String,
  isVerified: Boolean,
  subjectId: { type: Schema.Types.ObjectId, ref: 'Subjects' }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Users',users);