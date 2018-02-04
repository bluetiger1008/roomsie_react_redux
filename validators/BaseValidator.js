import { set } from 'lodash';

class BaseValidator {
  constructor(resource) {
    this.resource = resource;
    this.errors = {};
  }

  validatePresence(attribute) {
    if (!this.resource[attribute]) {
      set(this.errors, [attribute], 'is required');
    }
  }
}

export default BaseValidator;
