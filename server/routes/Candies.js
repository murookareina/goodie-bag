const router = require('express').Router();
const Candy = require('../db/models/Candy');

router.get('/', async (req, res, next) => {
  try {
    const allCandies = await Candy.findAll();
    console.log(allCandies);
    res.json(allCandies);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
