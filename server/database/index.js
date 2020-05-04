const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/overview', { useNewUrlParser: true });
const { connection } = mongoose;

const { Schema } = mongoose;

// {
//   boolean: Boolean,
//   emblem: String,
//   title: String,
//   text: String,
// }

const highlightSchema = new Schema({
  boolean: Boolean,
  emblem: String,
  title: String,
  text: String,
});

const DescriptionSchema = new Schema({
  listingId: Number,
  Title: String,
  Location: String,
  Highlights: [highlightSchema],
  Owner: String,
  Image: String,
  Occupancy: Number,
  Bedrooms: Number,
  Beds: Number,
  Bathrooms: Number,
  Info: String,
  MoreInfo: String,
});

const AmenitySchema = new Schema({
  listingId: Number,
  Basic: [String],
  FamilyFeatures: [String],
  Facilities: [String],
  Dining: [String],
  GuestAccess: [String],
  Logistics: [String],
  BedAndBath: [String],
  Outdoor: [String],
  SafetyFeatures: [String],
  NotIncluded: [String],
});

const Descriptions = mongoose.model('Descriptions', DescriptionSchema);
const Amenities = mongoose.model('Amenities', AmenitySchema);

const disconnectConnection = () => {
  connection.close();
};

module.exports = {
  Descriptions,
  Amenities,
  disconnectConnection,
};
