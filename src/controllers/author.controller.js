const model = require('../models/author.model');
const GenericController = require('./generic.controller');

class AuthorController extends GenericController {
  constructor() {
    super(model);
  }
}

module.exports = new AuthorController();
