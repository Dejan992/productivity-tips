/* eslint import/no-unresolved: 0 */

const router = require('express').Router();
const { Puppy } = require('../db/models');

router.get('/puppies', async (req, res, next) => {
  try {
    const myPuppies = await Puppy.findAll();
    res.json(myPuppies);
  } catch (err) {
    next(err);
  }
});

router.get('/puppies/:puppyId', async (req, res, next) => {
  try {
    const myPuppy = await Puppy.findById(req.params.puppyId);
    res.json(myPuppy);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
