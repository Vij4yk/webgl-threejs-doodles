
import createBox from './components/box';
import createSphere from './components/sphere';
import createTriangle from './components/triangle';
import createMonster from './components/importedModel';

setTimeout(() => {
  createBox('webgl-container-1');
  createSphere('webgl-container-2');
  createTriangle('webgl-container-3');
  createMonster('webgl-container-4');
}, 500);

console.log(window.WebGLRenderingContext);
