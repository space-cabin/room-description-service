const mongoose = require('mongoose');

mongoose.connect('mongodb://database/overview', { useNewUrlParser: true });
const { connection } = mongoose;

const { Schema } = mongoose;

const highlightSchema = new Schema({
  boolean: Boolean,
  emblem: String,
  title: String,
  text: String,
});

const featureSchema = new Schema({
  feature: String,
  description: String,
  emblem: String,
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
  Basic: [featureSchema],
  FamilyFeatures: [featureSchema],
  Facilities: [featureSchema],
  Dining: [featureSchema],
  GuestAccess: [featureSchema],
  Logistics: [featureSchema],
  BedAndBath: [featureSchema],
  Outdoor: [featureSchema],
  SafetyFeatures: [featureSchema],
  NotIncluded: [featureSchema],
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
