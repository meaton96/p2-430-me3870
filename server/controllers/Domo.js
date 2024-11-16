const models = require('../models');

const { Domo } = models;

const makerPage = (req, res) => res.render('app', { page: 'maker' });
const battlePage = (req, res) => res.render('app', { page: 'battle' });
const getDomos = async (req, res) => {
  try {
    const query = { owner: req.session.account._id };
    const docs = await Domo.find(query).select('name age health attack').lean().exec();

    return res.json({ domos: docs });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: 'An error occurred' });
  }
};

const makeDomo = async (req, res) => {
  if (!req.body.name || !req.body.age || !req.body.health || !req.body.attack) {
    return res.status(400).json({ error: 'name, age, health, and attack are required' });
  }

  const domoData = {
    name: req.body.name,
    age: req.body.age,
    health: req.body.health,
    attack: req.body.attack,
    owner: req.session.account._id,
  };

  try {
    const newDomo = new Domo(domoData);
    await newDomo.save();
    return res.status(201).json({
      name: newDomo.name, age: newDomo.age, health: newDomo.health, attack: newDomo.attack,
    });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ error: 'Domo already exists.' });
    }
    console.log(err.message);
    return res.status(500).json({ error: 'An error occurred' });
  }
};
const deleteDomo = async (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ error: 'name is required' });
  }
  try {
    const query = { name: req.body.name, owner: req.session.account._id };
    const result = await Domo.deleteOne(query);

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Domo not found' });
    }

    return res.status(200).json({ message: 'Domo deleted successfully' });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'An error occurred while deleting the Domo' });
  }
};
const makeRandomDomo = async (req, res) => {
  try {
    const response = await fetch('https://randomuser.me/api/', {
      'X-Api-key': process.env.API_KEY,
    });
    const body = await response.json();
    const person = body.results[0];

    const attack = Math.floor(Math.random() * 10) + 5;
    const health = Math.floor(Math.random() * 50) + 50;

    req.body = {
      name: `${person.login.username}`,
      age: `${person.dob.age}`,
      health,
      attack,
    };

    return makeDomo(req, res);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: 'Failed to generate random Domo' });
  }
};

module.exports = {
  makeDomo,
  makerPage,
  getDomos,
  makeRandomDomo,
  battlePage,
  deleteDomo,
};
