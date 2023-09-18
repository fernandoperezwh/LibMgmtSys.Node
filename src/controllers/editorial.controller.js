const model = require('../models/editorial.model');
const GenericController = require('./generic.controller');

class EditorialController extends GenericController {
  constructor() {
    super(model);
  }
}

module.exports = new EditorialController();
