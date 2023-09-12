const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    // Render the homepage
    res.render('homepage');
  } catch (err) {
    res.status(500).json(err);
  }
});