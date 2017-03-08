

import React from 'react';
import axios from 'axios';


export default class GitHub extends React.Component {

  constructor() {
    super();
    axios.get('http://localhost:7203').then((res) => {
      this.repositories = res.data;
      console.log(res.data);
    })
    .catch((err) => {
      console.log('Data query failed', err);
    });

    console.log('initiating GitHub');
  }

  render() {
    return (
      <div>
        <p>Make sure node server is running.</p>
        <p>Set environment variables to a local.env file in the root of the project</p>
        <p>Obtain GitHub token from https://github.com/settings/tokens/new</p>
      </div>
    );
  }
}

