const mongoose = require('mongoose');
const db = require('../config/db');
const Offer = require('../models/offers');

mongoose.connect(db.uri);

Offer.collection.drop();

Offer.create([{
  title: 'ACCELARATOR',
  brand: 'Adidas',
  player: 'David Beckham',
  posterImage: 'http://www.kicktv.com/wp-content/uploads/2016/01/sns-pictures-david-beckham-20130516-003.jpg'
},{
  title: 'HYPERVENOM',
  brand: 'Nike',
  player: 'Wayne Rooney',
  posterImage: 'https://www.footy-boots.com/wp-content/uploads/2014/11/wayne-rooney-100th-cap-football-boots-330x220.jpg'
}], (err, offers) => {
  if(err) console.log('There was an error creating offers', err);

  console.log(`${offers.length} offers created!`);
  mongoose.connection.close();
});
