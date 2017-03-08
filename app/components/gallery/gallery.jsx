
import React from 'react';
import createBox from '../generic/box';
import createSphere from '../generic/sphere';
import createTriangle from '../generic/triangle';
import createMonster from '../generic/importedModel';

export default class Gallery extends React.Component {

  constructor() {
    super();

    setTimeout(() => {
      createBox('webgl-container-1');
      createSphere('webgl-container-2');
      createTriangle('webgl-container-3');
      createMonster('webgl-container-4');
    }, 500);
  }

  render() {
    return (
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
    );
  }
}
