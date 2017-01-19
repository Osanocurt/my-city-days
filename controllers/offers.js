const Offer = require('../models/offers');

function offersIndex(req, res) {
  Offer.find((err, offers) => {
    if(err) return res.status(500).json({ error: err });
    return res.json(offers);
  });
}

function offersCreate(req, res) {
  Offer.create(req.body, (err, offer) => {
    if(err) return res.status(400).json({ error: err });
    return res.json(offer);
  });
}

function offersShow(req, res) {
  Offer.findById(req.params.id, (err, offer) => {
    if(err) return res.status(500).json({ error: err });
    if(!offer) return res.status(404).json({ error: 'Not found' });
    return res.json(offer);
  });
}

function offersUpdate(req, res) {
  Offer.findById(req.params.id, (err, offer) => {
    if(err) return res.status(500).json({ error: err });
    if(!offer) return res.status(404).json({ error: 'Not found' });

    for(const key in req.body) {
      offer[key] = req.body[key];
    }

    offer.save((err, offer) => {
      if(err) return res.status(400).json({ error: err });
      res.json(offer);
    });
  });
}

function offersDelete(req, res) {
  Offer.findById(req.params.id, (err, offer) => {
    if(err) return res.status(500).json({ error: err });
    if(!offer) return res.status(404).json({ error: 'Not found' });

    offer.remove(err => {
      if(err) return res.status(500).json({ error: err });
      res.status(204).send();
    });
  });
}

module.exports = {
  index: offersIndex,
  create: offersCreate,
  show: offersShow,
  update: offersUpdate,
  delete: offersDelete
};
