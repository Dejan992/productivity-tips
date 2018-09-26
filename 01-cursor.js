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

router.post('/puppies', async (req, res, next) => {
  try {
    const newPuppy = await Puppy.create({
      name: req.body.name,
      age: req.body.age,
      color: req.body.color
    });
    res.status(201).json(newPuppy);
  } catch (err) {
    next(err);
  }
});

router.put('/puppies/:puppyId', async (req, res, next) => {
  try {
    const [num, myPuppy] = await Puppy.update(
      {
        name: req.body.name,
        age: req.body.age,
        color: req.body.color
      },
      {
        where: { id: req.params.puppyId },
        returning: true,
        plain: true
      }
    );
    res.json(myPuppy);
  } catch (err) {
    next(err);
  }
});

router.delete('/puppies/:puppyId', async (req, res, next) => {
  try {
    const puppyId = +req.params.puppyId;
    await Puppy.destroy({ where: { id: puppyId } });
    res.json(puppyId);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
