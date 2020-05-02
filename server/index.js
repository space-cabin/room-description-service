const express = require('express');
const db = require('./database/index.js');

const app = express();
const PORT = 3000;

app.get('/:id', (req, res) => {
  const { id } = req.params;
  const data = {};
  db.Descriptions.findOne({ listingId: id })
    .then((description) => {
      data.description = description;
    })
    .then(
      db.Amenities.findOne({ listingId: id })
        .then((amenity) => {
          data.amenity = amenity;
          res.send(data);
        }),
    )
    .catch((err) => res.status(500).send(err));
});

app.listen(PORT);
