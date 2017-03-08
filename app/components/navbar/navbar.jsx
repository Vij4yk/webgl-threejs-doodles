
import React from 'react';
import Sphere from '../imagery/sphere';

require('./navbar.scss');

export default class NavBar extends React.Component {

  constructor() {
    super();
    console.log('initiating App');
  }

  shouldComponentUpdate() {
    // You can access `this.props` and `this.state` here
    // This function should return a boolean, whether the component should re-render.
    return false;
  }

  render() {
    return (
      <div>
        <header className="mdl-layout__header mdl-layout__header--transparent">
          <div className="mdl-layout__header-row">
            <Sphere />
            <span className="mdl-layout-title">WebGL & Three.js demo</span>
            {/*  Add spacer, to align navigation to the right */}
            <div className="mdl-layout-spacer" />
            {/*  Navigation */}
            <nav className="mdl-navigation">
              <a className="mdl-navigation__link" href="gallery">Gallery</a>
              <a className="mdl-navigation__link" href="about">About</a>
            </nav>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">WebGL & Three.js demo</span>
          {/* <nav className="mdl-navigation">
          <a className="mdl-navigation__link" href="">Link</a>
          <a className="mdl-navigation__link" href="">Link</a>
          <a className="mdl-navigation__link" href="">Link</a>
          <a className="mdl-navigation__link" href="">Link</a>
          </nav> */}
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
