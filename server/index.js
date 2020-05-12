const express = require('express');
const path = require('path');
const db = require('./database/index.js');


const app = express();
const PORT = 3001;

app.use(express.json());

app.use('/:id', express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.redirect(301, `http://localhost:${PORT}/index.html`);
});

app.get('/description/:id', (req, res) => {
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
