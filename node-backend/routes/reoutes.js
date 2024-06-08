const express = require('express');
const router = express.Router();
const User = require('../model/db').User;

// Create (POST)
router.post('/users', (req, res) => {
  const newUser = new User(req.body);
  newUser.save()
    .then(user => res.status(201).json(user))
    .catch(err => res.status(400).json({ error: err.message }));
});

// Read All (GET)
router.get('/users', (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Read One (GET)
router.get('/users/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      if (!user) return res.status(404).json({ error: 'User not found' });
      res.json(user);
    })
    .catch(err => res.status(500).json({ error: err.message }));
});

// Update (PUT)
router.put('/users/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    .then(user => {
      if (!user) return res.status(404).json({ error: 'User not found' });
      res.json(user);
    })
    .catch(err => res.status(400).json({ error: err.message }));
});

// Delete (DELETE)
router.delete('/users/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(user => {
      if (!user) return res.status(404).json({ error: 'User not found' });
      res.json({ message: 'User deleted' });
    })
    .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;