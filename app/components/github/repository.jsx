
import React from 'react';

export default class Repository extends React.Component {

  static propTypes = {
    name: React.PropTypes.string.isRequired
  }

  constructor() {
    super();
    console.log('Initiating Repository');
  }
  render() {
    return (
      <p>
        {this.props.name}
      </p>
    );
  }
}

