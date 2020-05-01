const faker = require('faker');
// const fs = require('fs');
// const axios = require('axios');
const db = require('./server/database/index.js');

const descriptionGenerator = () => {
  for (let i = 99; i >= 0; i -= 1) {
    const description = new db.Descriptions({
      listingId: i,
      Location: faker.fake('{{address.city}}, {{address.state}}, {{address.country}}'),
      Owner: faker.name.firstName(),
      Image: `https://overview-images.s3-us-west-2.amazonaws.com/${i}.jpg`,
      Occupancy: Math.floor(Math.random() * Math.floor(4) + 1),
      Bedrooms: Math.floor(Math.random() * Math.floor(3) + 1),
      Beds: Math.floor(Math.random() * Math.floor(4) + 1),
      Bathrooms: Math.floor(Math.random() * Math.floor(2) + 1),
      MoreInfo: faker.lorem.text(),
    });
    description.save((err) => {
      if (!err) {
        if (i === 0) {
          db.disconnectConnection();
        }
      }
    });
  }
};

const amenityGenerator = () => {
  for (let i = 99; i >= 0; i -= 1) {
    const randomWords = () => faker.random.words(Math.floor(Math.random() * Math.floor(10))).split(' ');
    const amenitie = new db.Amenities({
      listingId: i,
      Basic: randomWords(),
      FamilyFeatures: randomWords(),
      Facilities: randomWords(),
      Dining: randomWords(),
      GuestAccess: randomWords(),
      Logistics: randomWords(),
      BedAndBath: randomWords(),
      Outdoor: randomWords(),
      SafetyFeatures: randomWords(),
      NotIncluded: randomWords(),
    });
    amenitie.save((err) => {
      if (!err) {
        if (i === 0) {
          db.disconnectConnection();
        }
      }
    });
  }
};

descriptionGenerator();
amenityGenerator();
// eslint-disable-next-line spaced-comment
//***********ONLY USED TO POPULATE IMAGES TO UPLOAD TO S3************//

// const images = (n) => {
//   axios({
//     method: 'get',
//     url: "https://loremflickr.com/320/240/dogs",
//     responseType: 'stream',
//   }).then((response) => {
//     response.data.pipe(fs.createWriteStream(`../../../Pictures/hr/FEC/images/${n}.jpg`));
//   }).catch((err) => {
//     console.log(err);
//   });
// };

// const populateImages = () => {
//   for (let i = 99; i >= 0; i -= 1) {
//     images(i);
//   }
// };

// populateImages();
