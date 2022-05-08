const express = require('express');
const router = express.Router();
const programmingLanguages = require('../services/programmingLanguage');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await programmingLanguages.getMultiple());
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});


/* GET one element*/
router.get('/:id', async function(req, res, next) {
  try {
    res.json(await programmingLanguages.getOne(req.params.id));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

/* Create one element*/
router.post('/', async function(req, res, next) {
  try {
    res.json(await programmingLanguages.create(req.body));
  } catch (err) {
    console.error(`Error while creating programming languages `, err.message);
    next(err);
  }
});

/* Update sets */
router.put('/:id', async (req, res, next) => {
  try{
    res.json(await programmingLanguages.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating programming languages `, err.message);
    next(err);
  }
});

/* Delete one element */
router.delete('/:id', async (req, res, next) => {
  try{
    res.json(await programmingLanguages.deleteOne(req.params.id));
  } catch (err) {
    console.error(`Error while deleting programming languages `, err.message);
    next(err);
  }
});

module.exports = router;