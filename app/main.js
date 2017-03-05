
import createBox from './components/box';
import createSphere from './components/sphere';

setTimeout(() => {
  createBox('webgl-container-1');
  createSphere('webgl-container-2');
}, 500);

console.log(window.WebGLRenderingContext);
