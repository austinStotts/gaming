import * as THREE from 'three';
import * as CANNON from "cannon";

export default (width, height, rotate90=false) => {

  const thickness = 0.1;

  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load('../door.jpg');
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;

  // Set the number of times the texture repeats
  const repeatX = width; // Repeat 4 times along the x-axis
  const repeatY = height; // Repeat 4 times along the y-axis
  texture.repeat.set(repeatX, repeatY);

  // Create a material using the texture
  // const material = 

  const wallGeometry = new THREE.BoxGeometry(thickness*2, height, width);
  const wallMaterial = new THREE.MeshBasicMaterial({ map: texture });
  let doorMesh = new THREE.Mesh(wallGeometry, wallMaterial);

  const doorShape = new CANNON.Box(new CANNON.Vec3(thickness / 2, height / 2, width / 2));
  const doorBody = new CANNON.Body({shape: doorShape, mass: 0, collisionFilterGroup: 1, collisionFilterMask: -1 });
  doorBody.userData = { collisionClass: 'door', mesh: doorMesh }

  if(rotate90) { doorMesh.rotateY(Math.PI / 2) }
//   doorBody.position.set(new CANNON.Vec3(0, 0, 0));
//   doorMesh.position.copy(doorBody.position);
  doorBody.quaternion.copy(doorMesh.quaternion);

  return [doorMesh, doorBody]
}