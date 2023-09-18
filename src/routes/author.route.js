const express = require('express');
const controller = require('../controllers/author.controller');

const router = express.Router();

router.get('/authors', (req, res) => controller.list(req, res));
router.post('/authors', (req, res) => controller.create(req, res));

router.get('/authors/:id', (req, res) => controller.retrieve(req, res));
router.put('/authors/:id', (req, res) => controller.update(req, res));
router.delete('/authors/:id', (req, res) => controller.destroy(req, res));

module.exports = router;
