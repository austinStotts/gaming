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
  const wallMaterial = new THREE.MeshPhongMaterial({ map: texture, opacity: 1, transparent: false });
  let doorMesh = new THREE.Mesh(wallGeometry, wallMaterial);

  const doorShape = new CANNON.Box(new CANNON.Vec3(thickness / 2, height / 2, width / 2));
  const doorBody = new CANNON.Body({shape: doorShape, mass: 0, collisionFilterGroup: 1, collisionFilterMask: -1 });
  doorBody.userData = { collisionClass: 'door', mesh: doorMesh }

  let edgeGeo = new THREE.EdgesGeometry(wallGeometry);
  var edgeMat = new THREE.LineBasicMaterial({ color: 0xffffff }); // You can customize the color and linewidth
  var edgeMesh = new THREE.LineSegments(edgeGeo, edgeMat);

  doorMesh.userData.edgeMesh = edgeMesh;
  doorMesh.userData.isInteractable = true;
  doorMesh.userData.physicsBody = doorBody;
  if(rotate90) { doorMesh.rotateY(-Math.PI/2) }
  doorBody.quaternion.copy(doorMesh.quaternion);

  return [doorMesh, doorBody]
}