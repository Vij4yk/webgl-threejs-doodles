import {
  Scene, WebGLRenderer, CanvasRenderer,
  AmbientLight, PerspectiveCamera, Mesh,
  Geometry, Vector3, Face3
} from 'three';

export default function createTriangle(elementId) {
  const scene = new Scene();
  const renderer = window.WebGLRenderingContext ?
    new WebGLRenderer({ alpha: true }) : new CanvasRenderer({ alpha: true });
  const light = new AmbientLight(0xffffff);
  let camera;
  let triangle;
  let direction = 1;

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
      2,
      1,
      1,
      1000);

    camera.position.z = 100;

    scene.add(camera);

    const triangleGeometry = new Geometry();
    triangleGeometry.vertices.push(new Vector3(0.0, 1.0, 0.0));
    triangleGeometry.vertices.push(new Vector3(-1.0, -1.0, 0.0));
    triangleGeometry.vertices.push(new Vector3(1.0, -1.0, 0.0));
    triangleGeometry.faces.push(new Face3(0, 1, 2));

    triangle = new Mesh(triangleGeometry);
    triangle.color = 'pink';
    scene.add(triangle);
  }

  function render() {
    // 300 x 300
    // triangle.position.y += 0.01;
    if (triangle.position.x <= 0.75 && direction === 1) {
      triangle.position.x += 0.01;
    } else {
      direction = 2;
      if (triangle.position.x <= -0.75) {
        direction = 1;
      } else {
        triangle.position.x -= 0.01;
      }
    }

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
}
