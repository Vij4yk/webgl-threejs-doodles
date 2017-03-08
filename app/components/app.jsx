
import React from 'react';
// Import routing components
import { Router, Route, browserHistory } from 'react-router';

import NavBar from './navbar/navbar';
import Gallery from './gallery/gallery';
import About from './about/about';

export default class App extends React.Component {

  constructor() {
    super();
    console.log('initiating App');
  }

  render() {
    return (
      <div className="demo-layout-transparent mdl-layout mdl-js-layout">
        <NavBar />

        <div className="demo-layout-transparent mdl-layout mdl-js-layout">
          <main className="mdl-layout__content">
            <Router history={browserHistory} >
              <Route path="/" component={Gallery} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/about" component={About} />
            </Router>
          </main>
        </div>
      </div>);
  }
}

// export default React.createClass({
//   render: () => {
//     return (
//       )
//   }
// });

/*
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}
*/
