import { isEmpty } from 'lodash';
import BaseValidator from './BaseValidator';

class PropertyBasicsValidator extends BaseValidator {
  call() {
    this.errors = {};

    this.validatePresence('propertyTitle');
    this.validatePresence('listingType');
    this.validatePresence('propertyType');

    if (this.resource.listingType) {
      this.validatePresence('placementType');
    }

    return isEmpty(this.errors);
  }
}

export default PropertyBasicsValidator;
