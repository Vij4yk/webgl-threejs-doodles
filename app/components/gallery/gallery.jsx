
import React from 'react';
import Sphere from '../imagery/sphere';
import Box from '../imagery/box';
import createTriangle from '../generic/triangle';
import createMonster from '../generic/importedModel';

export default class Gallery extends React.Component {

  constructor() {
    super();

    setTimeout(() => {
      createTriangle('webgl-container-3');
      createMonster('webgl-container-4');
    }, 500);
  }

  render() {
    return (
      <div className="content-grid mdl-grid">
        <div className="mdl-cell mdl-cell--6-col">
          <span>three.BoxGeometry</span>
          <Box />
        </div>
        <div className="mdl-cell mdl-cell--6-col">
          <span>three.SphereGeometry</span>
          <Sphere width="300" height="300" distance="75" color="green" />
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
