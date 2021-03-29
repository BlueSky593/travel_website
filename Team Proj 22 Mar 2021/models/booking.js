// Authors: Farid Kassam, Srinivasan Sivalingam, Irshaad Sardiwalla

const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");
mongoose.connect(process.env.DB_HOST, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


const bookingSchema = new mongoose.Schema(
   {
   BookingId: {
     type: Number,
     
     trim: true,
  },
   BookingDate: {
     type: String,
     trim: true
  },
   BookingNo: {
     type: String,
     trim: true
  },

  BookingCost:{
    type: Number,
    trim:true
  },
 
   TravelerCount: {
     type: Number,
     trim: true
  },
   CustomerId: {
     type: Number,
   
     trim: true
  },
  TripTypeId:{
   type: String,
   trim: true
  },
  PackageId: {
   type: Number,
   trim: true
},
userid: {
  type: String,
  trim: true,
}
 });

bookingSchema.plugin(uniqueValidator);
// Create a model Booking using the userSchema
module.exports.Booking = mongoose.model('Booking', bookingSchema);     
 