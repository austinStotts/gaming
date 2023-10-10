import * as THREE from 'three';
import * as CANNON from "cannon";

export default (width, height, depth, color) => {
  // Three.js setup
  const roomGroup = new THREE.Group();
  const cannonBodies = []; // Array to store Cannon.js bodies

  // Create floor
  const floorGeometry = new THREE.BoxGeometry(width, depth, 0.1);
  const floorMaterial = new THREE.MeshBasicMaterial({ color: 0x464141 });
  const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
  floorMesh.rotation.x = -Math.PI / 2; // Rotate the floor to be horizontal
  floorMesh.position.set(0, 0, depth / 2);
  roomGroup.add(floorMesh);

  // Create Cannon.js body for the floor
  const floorShape = new CANNON.Box(new CANNON.Vec3(width / 2, depth / 2, 0.05));
  const floorBody = new CANNON.Body({ mass: 0, collisionFilterGroup: 1, collisionFilterMask: -1 });
  floorBody.addShape(floorShape);
  floorBody.position.copy(new CANNON.Vec3(0, 0, depth / 2));
  cannonBodies.push(floorBody); // Add to the array

  // Create walls
  const wallThickness = 0.1;
  const wallGeometry = new THREE.BoxGeometry(wallThickness, height, depth);
  const wallMaterial = new THREE.MeshBasicMaterial({ color });

  // Left wall
  const leftWallPosition = new THREE.Vector3(-width / 2 + wallThickness / 2, height/2, depth / 2);
  const leftWallShape = new CANNON.Box(new CANNON.Vec3(wallThickness / 2, height / 2, depth / 2));
  const leftWallBody = new CANNON.Body({ mass: 0, collisionFilterGroup: 1, collisionFilterMask: -1 });
  leftWallBody.addShape(leftWallShape);
  leftWallBody.position.copy(new CANNON.Vec3(leftWallPosition.x, leftWallPosition.y, leftWallPosition.z));
  const leftWallMesh = new THREE.Mesh(wallGeometry, wallMaterial);
  leftWallMesh.position.copy(leftWallPosition);
  cannonBodies.push(leftWallBody); // Add to the array

  // Right wall
  const rightWallPosition = new THREE.Vector3(width / 2 - wallThickness / 2, height/2, depth / 2);
  const rightWallShape = new CANNON.Box(new CANNON.Vec3(wallThickness / 2, height / 2, depth / 2));
  const rightWallBody = new CANNON.Body({ mass: 0, collisionFilterGroup: 1, collisionFilterMask: -1 });
  rightWallBody.addShape(rightWallShape);
  rightWallBody.position.copy(new CANNON.Vec3(rightWallPosition.x, rightWallPosition.y, rightWallPosition.z));
  const rightWallMesh = new THREE.Mesh(wallGeometry, wallMaterial);
  rightWallMesh.position.copy(rightWallPosition);
  cannonBodies.push(rightWallBody); // Add to the array

  // Back wall
  const backWallPosition = new THREE.Vector3(0, height/2, depth + wallThickness / 2);
  const backWallShape = new CANNON.Box(new CANNON.Vec3(width / 2, height / 2, wallThickness / 2));
  const backWallBody = new CANNON.Body({ mass: 0, collisionFilterGroup: 1, collisionFilterMask: -1 });
  backWallBody.addShape(backWallShape);
  backWallBody.position.copy(new CANNON.Vec3(backWallPosition.x, backWallPosition.y, backWallPosition.z));
  const backWallGeometry = new THREE.BoxGeometry(width, height, wallThickness);
  const backWallMesh = new THREE.Mesh(backWallGeometry, wallMaterial);
  backWallMesh.position.copy(backWallPosition);
  cannonBodies.push(backWallBody); // Add to the array

  // Front wall (optional)

  // Add floor and wall bodies and meshes to the room group
  roomGroup.add(floorMesh, leftWallMesh, rightWallMesh, backWallMesh);

  // Return both the Three.js group and Cannon.js bodies array
  return { roomGroup, cannonBodies };
}