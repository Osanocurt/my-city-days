const Deal = require('../models/deal');

function dealsIndex(req, res) {
  Deal.find((err, deals) => {
    if(err) return res.status(500).json({ error: err });
    return res.json(deals);
  });
}

function dealsCreate(req, res) {
  Deal.create(req.body, (err, deal) => {
    if(err) return res.status(400).json({ error: err });
    return res.json(deal);
  });
}

function dealsShow(req, res) {
  Deal.findById(req.params.id, (err, deal) => {
    if(err) return res.status(500).json({ error: err });
    if(!deal) return res.status(404).json({ error: 'Not found' });
    return res.json(deal);
  });
}

function dealsUpdate(req, res) {
  Deal.findById(req.params.id, (err, deal) => {
    if(err) return res.status(500).json({ error: err });
    if(!deal) return res.status(404).json({ error: 'Not found' });

    for(const key in req.body) {
      deal[key] = req.body[key];
    }

    deal.save((err, deal) => {
      if(err) return res.status(400).json({ error: err });
      res.json(deal);
    });
  });
}

function dealsDelete(req, res) {
  Deal.findById(req.params.id, (err, deal) => {
    if(err) return res.status(500).json({ error: err });
    if(!deal) return res.status(404).json({ error: 'Not found' });

    deal.remove(err => {
      if(err) return res.status(500).json({ error: err });
      res.status(204).send();
    });
  });
}

module.exports = {
  index: dealsIndex,
  create: dealsCreate,
  show: dealsShow,
  update: dealsUpdate,
  delete: dealsDelete
};
