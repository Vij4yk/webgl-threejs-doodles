'use strict';

import { Scene, WebGLRenderer, CanvasRenderer,
  AmbientLight, PerspectiveCamera, Mesh,
  BoxGeometry, MeshBasicMaterial } from './three';

(function () {
  var scene = new Scene();
  var renderer = window.WebGLRenderingContext ? new WebGLRenderer() : new CanvasRenderer();
  var light = new AmbientLight(0xffffff);
  var camera, box;

  function initScene() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('webgl-container').appendChild(renderer.domElement);

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
      window.innerWidth / window.innerHeight,
      1,
      1000);

    camera.position.z = 100;

    scene.add(camera);

    box = new Mesh(
      new BoxGeometry(20, 20, 20) /*width, height, depth*/,
      new MeshBasicMaterial({color: 0xffffff})
    );

    box.name = 'einari';

    scene.add(box);
  }

  // recursive function;
  function render() {

    box.rotation.y += 0.01;
    box.rotation.x += 0.01;
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
  render();

  console.log(window.WebGLRenderingContext);
})();


