const express = require('express');
const controller = require('../controllers/editorial.controller');

const router = express.Router();

router.get('/editorials', (req, res) => controller.list(req, res));
router.post('/editorials', (req, res) => controller.create(req, res));

router.get('/editorials/:id', (req, res) => controller.retrieve(req, res));
router.put('/editorials/:id', (req, res) => controller.update(req, res));
router.delete('/editorials/:id', (req, res) => controller.destroy(req, res));

module.exports = router;
