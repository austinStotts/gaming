import * as THREE from 'three';
import * as CANNON from "cannon";

var world, mass, body, shape, timeStep=1/60,
camera, scene, renderer, geometry, material, mesh;

let cubes = [];

initThree();
initCannon();
animate();

function initCannon() {

 world = new CANNON.World();
 world.gravity.set(0,0,1);
 world.broadphase = new CANNON.NaiveBroadphase();
 world.solver.iterations = 10;

 shape = new CANNON.Box(new CANNON.Vec3(1,1,1));
 mass = 1;
 body = new CANNON.Body({
   mass: 1
 });
 body.addShape(shape);
 body.angularVelocity.set(2,10,0);
 body.angularDamping = 0.5;
 world.addBody(body);

}

function initThree() {

 scene = new THREE.Scene();

 camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 100 );
 camera.position.z = 5;
 scene.add( camera );

  var addMesh = (x) => {
    geometry = new THREE.BoxGeometry( x, x, x );
    material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
    mesh = new THREE.Mesh( geometry, material );
    
    scene.add(mesh);
    cubes.push(mesh);
  }



  
  addMesh(1)
  addMesh(2)
  addMesh(3)
  addMesh(4)
  addMesh(5)
  

 renderer = new THREE.WebGLRenderer();
 renderer.setSize( window.innerWidth, window.innerHeight );

 document.body.appendChild( renderer.domElement );

}

function animate() {

 requestAnimationFrame( animate );
 updatePhysics();
 render();

}

function updatePhysics() {

 // Step the physics world
 world.step(timeStep);

 // Copy coordinates from Cannon.js to Three.js
 cubes.forEach(cube => {
  cube.position.copy(body.position)
  cube.quaternion.copy(body.quaternion);
 });
//  mesh.position.copy(body.position);
//  mesh.quaternion.copy(body.quaternion);

}

function render() {

 renderer.render( scene, camera );

}