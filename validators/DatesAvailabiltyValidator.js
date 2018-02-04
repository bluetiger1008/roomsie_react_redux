import { forEach, isEmpty, set } from 'lodash';

class DatesAvailabilityValidator {
  constructor(property) {
    this.property = property;
  }

  call() {
    this.errors = {};

    this.validatePresence('sessions');
    this.validatePresence('blackoutDates');
    this.validateTimesDontOverlap('sessions');
    this.validateTimesDontOverlap('blackoutDates');

    return isEmpty(this.errors);
  }

  validatePresence(attribute) {
    forEach(this.property[attribute], (instance, idx) => {
      forEach(instance, (value, key) => {
        if (!value) {
          set(this.errors, [attribute, idx, key], "can't be blank");
        }
      });
    });
  }

  validateTimesDontOverlap(attribute) {
    forEach(this.property[attribute], (instance, idx) => {
      forEach(this.property[attribute], (previousInstance, previousIdx) => {
        if (previousIdx < idx) {
          forEach(instance, (value, key) => {
            const { startDate, endDate } = previousInstance;
            if (value && startDate <= value && value <= endDate) {
              set(this.errors, [attribute, idx, key], 'overlaps with other dates');
            }
          });
        }
      });
    });
  }
}

export default DatesAvailabilityValidator;
