import React from 'react';


import createBox from './generic/box';
import createSphere from './generic/sphere';
import createTriangle from './generic/triangle';
import createMonster from './generic/importedModel';

setTimeout(() => {
  createBox('webgl-container-1');
  createSphere('webgl-container-2');
  createTriangle('webgl-container-3');
  createMonster('webgl-container-4');
}, 500);

console.log(window.WebGLRenderingContext);

// require('./App.css');

export default () =>
  <div className="demo-layout-transparent mdl-layout mdl-js-layout">
    <header className="mdl-layout__header mdl-layout__header--transparent">
      <div className="mdl-layout__header-row">

        <span className="mdl-layout-title">WebGL & Three.js demo</span>
        {/*  Add spacer, to align navigation to the right */}
        <div className="mdl-layout-spacer" />
        {/*  Navigation */}
        {/* <nav className="mdl-navigation">
          <a className="mdl-navigation__link" href="">Link</a>
          <a className="mdl-navigation__link" href="">Link</a>
          <a className="mdl-navigation__link" href="">Link</a>
          <a className="mdl-navigation__link" href="">Link</a>
        </nav> */}
      </div>
    </header>

    <div className="mdl-layout__drawer">
      <span className="mdl-layout-title">WebGL & Three.js demo</span>
      {/* <nav className="mdl-navigation">
        <a className="mdl-navigation__link" href="">Link</a>
        <a className="mdl-navigation__link" href="">Link</a>
        <a className="mdl-navigation__link" href="">Link</a>
        <a className="mdl-navigation__link" href="">Link</a>
      </nav>*/}
    </div>

    <main className="mdl-layout__content">

      <div className="content-grid mdl-grid">
        <div className="mdl-cell mdl-cell--6-col">
          <span>three.BoxGeometry</span>
          <div id="webgl-container-1" />
        </div>
        <div className="mdl-cell mdl-cell--6-col">
          <span>three.SphereGeometry</span>
          <div id="webgl-container-2" />
        </div>
        <div className="mdl-cell mdl-cell--6-col">
          <span>custom three.Geometry</span>
          <div id="webgl-container-3" />
        </div>
        <div className="mdl-cell mdl-cell--6-col">
          <span>imported example model</span>
          <div id="webgl-container-4" />
        </div>
      </div>
    </main>

  </div>
  ;

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
