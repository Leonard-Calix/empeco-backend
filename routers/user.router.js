const express = require('express');
const { findAll, findById, create, update, remove } = require('../controllers/user.controller');
const { validateJWT } = require('../middlewares/validateJWT');
const router = express.Router();

router.get('/', findAll);

//router.get('/:id', findById);

router.post('/', create);

router.put('/', validateJWT, update);

//router.delete('/:id', remove);

module.exports = router;