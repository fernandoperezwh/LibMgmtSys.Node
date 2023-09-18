const express = require('express');
const controller = require('../controllers/book.controller');

const router = express.Router();

router.get('/books', (req, res) => controller.list(req, res));
router.post('/books', (req, res) => controller.create(req, res));

router.get('/books/:id', (req, res) => controller.retrieve(req, res));
router.put('/books/:id', (req, res) => controller.update(req, res));
router.delete('/books/:id', (req, res) => controller.destroy(req, res));

module.exports = router;
