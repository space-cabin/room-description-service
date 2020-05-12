const faker = require('faker');
const fs = require('fs');
const axios = require('axios');
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
          emblem: 'fas fa-key',
          text: `${Math.floor(Math.random() * (100 - 80) + 80)}% of recent guests gave the check-in process a 5-star rating`,
        },
        {
          boolean: faker.random.boolean(),
          emblem: 'fas fa-door-open',
          title: 'Self check-in',
          text: `Check yourself in with the ${faker.hacker.noun()}.`,
        },
        {
          boolean: faker.random.boolean(),
          emblem: 'fas fa-medal',
          title: `${name} is a Superhost`,
          text: 'Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.',
        },
        {
          boolean: faker.random.boolean(),
          emblem: 'fas fa-spray-can',
          title: 'Sparkling clean',
          text: `${Math.floor(Math.random() * (25 - 5) + 5)} recent guests said this place was sparkling clean.`,
        },
        {
          boolean: faker.random.boolean(),
          emblem: 'fas fa-map-marker-alt',
          title: 'Great Location',
          text: `${Math.floor(Math.random() * (100 - 80) + 80)}% of recent guests gave the location a 5-star rating`,
        },
        {
          boolean: faker.random.boolean(),
          emblem: 'fas fa-house-user',
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
    // const randomWords = () =>
    // faker.random.words(Math.floor(Math.random() * Math.floor(10))).split(' ');

    const randomFeatures = () => {
      const features = [];
      const random = Math.floor(Math.random() * (8 - 2) + 2);
      const emblems = ['fab fa-jedi-order', 'fab fa-galactic-republic', 'fab fa-old-republic', 'fab fa-galactic-senate', 'fas fa-bacon', 'fas fa-pastafarianism', 'fas fa-journal-whills', 'fab fa-sith', 'fab fa-d-and-d', 'fas fa-dice-d20', 'fab fa-mandalorian', 'fab fa-first-order', 'fab fa-rebel'];
      for (let j = random; j > 0; j -= 1) {
        const word = faker.commerce.product();
        const sentence = faker.lorem.sentence();
        const feature = {};
        const randomEmblem = faker.random.arrayElement(emblems);
        feature.feature = word;
        feature.emblem = randomEmblem;
        feature.description = sentence;
        emblems.splice(emblems.indexOf(randomEmblem), 1);
        features.push(feature);
      }
      return features;
    };
    const amenitie = new db.Amenities({
      listingId: i,
      Basic: randomFeatures(),
      FamilyFeatures: randomFeatures(),
      Facilities: randomFeatures(),
      Dining: randomFeatures(),
      GuestAccess: randomFeatures(),
      Logistics: randomFeatures(),
      BedAndBath: randomFeatures(),
      Outdoor: randomFeatures(),
      SafetyFeatures: randomFeatures(),
      NotIncluded: randomFeatures(),
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

// descriptionGenerator();
// amenityGenerator();
// eslint-disable-next-line spaced-comment
//***********ONLY USED TO POPULATE IMAGES TO UPLOAD TO S3************//

// const images = (n) => {
//   axios({
//     method: 'get',
//     url: "https://loremflickr.com/320/240/dogs",
//     responseType: 'stream',
//   }).then((response) => {
//     response.data.pipe(fs.createWriteStream(`../../../../Pictures/hr/FEC/images/${n}.jpg`));
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
