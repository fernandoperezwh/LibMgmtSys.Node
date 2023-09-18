const model = require('../models/book.model');
const GenericController = require('./generic.controller');

class BookController extends GenericController {
  constructor() {
    super(model);
  }
}

module.exports = new BookController();
