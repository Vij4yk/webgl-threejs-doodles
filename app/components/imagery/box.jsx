
import React from 'react';
import {
  Scene, WebGLRenderer, CanvasRenderer,
  AmbientLight, PerspectiveCamera, Mesh,
  BoxGeometry, MeshBasicMaterial
} from 'three';

export default class Box extends React.Component {

  // static propTypes = {
  //   width: React.PropTypes.string.isRequired,
  //   height: React.PropTypes.string.isRequired,
  //   distance: React.PropTypes.string,
  //   color: React.PropTypes.string
  // }

  // static defaultProps = {
  //   distance: '75',
  //   color: 'white'
  // }

  constructor() {
    super();
    this.scene = new Scene();
    this.renderer = window.WebGLRenderingContext ?
      new WebGLRenderer({ alpha: true }) : new CanvasRenderer({ alpha: true });

    Box.instanceId = Box.instanceId ? Box.instanceId + 1 : 1;

    this.id = `box-${Box.instanceId}`;
  }

  componentDidMount() {
    this.initScene();
  }


  initScene() {
    this.renderer.setSize(300, 300);
    document.getElementById(this.id).appendChild(this.renderer.domElement);
    this.scene.background = 'transparent';
    this.scene.add(new AmbientLight(0xffffff));

    /**
     * PerspectiveCamera params
     * 1. frustrum vertical field-of-view
     * 2. aspect ratio (width/height)
     * 3. near
     * 4. far
     */
    this.camera = new PerspectiveCamera(
      35,
      1,
      1,
      1000);

    this.camera.position.z = 100;

    this.scene.add(this.camera);


    /**
     * Meshes
     * Vertices: positions in space defines as x, y, z coordinates.
     * Faces: connect vertices together
     */
    this.box = new Mesh(
      new BoxGeometry(20, 20, 20),
      new MeshBasicMaterial({ color: 0xffffff })
    );

    this.box.name = 'einari';

    this.scene.add(this.box);
    this.nextFrame();
  }

  nextFrame() {
    this.box.rotation.y += 0.005;
    this.box.rotation.x += 0.005;
    this.renderer.render(this.scene, this.camera);
    setTimeout(() => {
      this.forceUpdate(this.nextFrame);
    });
  }


  render() {
    return (<div id={this.id} />);
  }
}
