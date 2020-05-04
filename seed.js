const faker = require('faker');
// const fs = require('fs');
// const axios = require('axios');
const db = require('./server/database/index.js');

const descriptionGenerator = () => {
  for (let i = 99; i >= 0; i -= 1) {
    const name = faker.name.firstName();
    const house = faker.random.arrayElement(['apartment', 'house']);
    const description = new db.Descriptions({
      listingId: i,
      Title: faker.commerce.productName(),
      Location: faker.fake('{{address.city}}, {{address.state}}, {{address.country}}'),
      Highlights: [
        {
          boolean: faker.random.boolean(),
          title: 'Great check-in experience',
          emblem: '<i class="fas fa-key"></i>',
          text: `${Math.floor(Math.random() * (100 - 80) + 80)}% of recent guests gave the check-in process a 5-star rating`,
        },
        {
          boolean: faker.random.boolean(),
          emblem: '<i className="fas fa-door-open"></i>',
          title: 'Self check-in',
          text: `Check yourself in with the ${faker.hacker.noun()}.`,
        },
        {
          boolean: faker.random.boolean(),
          emblem: '<i class="fas fa-medal"></i>',
          title: `${name} is a Superhost`,
          text: 'Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.',
        },
        {
          boolean: faker.random.boolean(),
          emblem: '<i class="fas fa-spray-can"></i>',
          title: 'Sparkling clean',
          text: `${Math.floor(Math.random() * (25 - 5) + 5)} recent guests said this place was sparkling clean.`,
        },
        {
          boolean: faker.random.boolean(),
          emblem: '<i class="fas fa-map-marker-alt"></i>',
          title: 'Great Location',
          text: `${Math.floor(Math.random() * (100 - 80) + 80)}% of recent guests gave the location a 5-star rating`,
        },
        {
          boolean: faker.random.boolean(),
          emblem: '<i class="fas fa-house-user"></i>',
          title: 'Entire home',
          text: `You’ll have the ${house} to yourself.`,
        },
      ],
      Owner: name,
      Image: `https://overview-images.s3-us-west-2.amazonaws.com/${i}.jpg`,
      Occupancy: Math.floor(Math.random() * Math.floor(4) + 1),
      Bedrooms: Math.floor(Math.random() * Math.floor(3) + 1),
      Beds: Math.floor(Math.random() * Math.floor(4) + 1),
      Bathrooms: Math.floor(Math.random() * Math.floor(2) + 1),
      Info: faker.lorem.paragraph(),
      MoreInfo: faker.lorem.paragraph(),
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
