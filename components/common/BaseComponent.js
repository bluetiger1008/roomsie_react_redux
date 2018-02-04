import { Component } from 'react';
import { get, set } from 'lodash';

class BaseComponent extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange(...path) {
    const eventOrValue = path.pop();
    const value = get(eventOrValue.target, 'value', eventOrValue);
    this.setState(oldState => {
      const key = path[0];
      set(oldState, path, value);
      return { [key]: oldState[key] };
    });
  }
}

export default BaseComponent;
