const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/overview', { useNewUrlParser: true });
const { connection } = mongoose;

const { Schema } = mongoose;

const DescriptionSchema = new Schema({
  listingId: Number,
  Location: String,
  Owner: String,
  Image: String,
  Occupancy: Number,
  Bedrooms: Number,
  Beds: Number,
  Bathrooms: Number,
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
