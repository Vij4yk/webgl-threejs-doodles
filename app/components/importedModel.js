

import {
  Scene, WebGLRenderer, CanvasRenderer,
  AmbientLight, PerspectiveCamera, ColladaLoader
} from 'three';

import './ColladaLoader';

export default function createMonster(elementId) {
  const scene = new Scene();
  const renderer = window.WebGLRenderingContext ?
  new WebGLRenderer({ alpha: true }) : new CanvasRenderer({ alpha: true });
  const light = new AmbientLight(0xffffff);
  let camera;
  let monster;

  function initScene() {
    const doc = document.getElementById(elementId);

    renderer.setSize(300, 300);
    doc.appendChild(renderer.domElement);
    scene.background = 'transparent';
    scene.add(light);

    /**
     * PerspectiveCamera params
     * 1. frustrum vertical field-of-view
     * 2. aspect ratio (width/height)
     * 3. near
     * 4. far
     */
    camera = new PerspectiveCamera(
      35,
      1,
      1,
      1000);

    camera.position.z = 200;

    scene.add(camera);
    const loader = new ColladaLoader();
    loader.options.convertUpAxis = true;

    loader.load('assets/monster.dae', (collada) => {
      monster = collada.scene;
      scene.add(monster);
      render();
    });
  }

  function render() {
    monster.rotation.y += 0.01;
    // monster.rotation.x += 0.01;
    renderer.render(scene, camera);
    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
     * The window.requestAnimationFrame() method tells the browser that
     * you wish to perform an animation and requests that the browser
     * call a specified function to update an animation before the next
     * repaint. The method takes as an argument a callback to be invoked
     * before the repaint.
     */
    requestAnimationFrame(render);
  }

  initScene();
}
