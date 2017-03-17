
import React from 'react';
import axios from 'axios';
import _ from 'lodash';

import Repository from './repository';

export default class GitHub extends React.Component {

  constructor() {
    super();
    axios.get('http://localhost:7203').then((res) => {
      this.repositories = res.data;
      this.forceUpdate();
    })
      .catch((err) => {
        console.log('Data query failed', err);
      });

    console.log('initiating GitHub');
  }

  setInitialState() {
    console.log('setInitialState');
    return {};
  }
  createRepositories() {
    return _.map(this.repositories, (n, i) => (<Repository key={i} name={n} />));
  }

  render() {
    if (this.repositories) {
      return (
        <div>
          {this.createRepositories()}
        </div>
      );
    }
    return (
      <div>
        <p>Make sure node server is running.</p>
        <p>Set environment variables to a local.env file in the root of the project</p>
        <p>Obtain GitHub token from https://github.com/settings/tokens/new</p>
      </div>
    );
  }
}

