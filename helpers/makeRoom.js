import * as THREE from 'three';
import * as CANNON from "cannon";

export default (position, options) => {
  let width = options.w;
  let height = options.h;
  let depth = options.d;
  let color = options.color;


  // Three.js setup
  const roomGroup = new THREE.Group();

  // Create floor
  const floorGeometry = new THREE.BoxGeometry(width, depth, 0.1);
  const floorMaterial = new THREE.MeshBasicMaterial({ color: 0x464141 });
  const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
  floorMesh.rotation.x = -Math.PI / 2; // Rotate the floor to be horizontal
  floorMesh.position.set(0 + position.x, 0 + position.y, (depth / 2) + position.z);
  // roomGroup.add(floorMesh);

  // Create Cannon.js body for the floor
  const floorShape = new CANNON.Box(new CANNON.Vec3(width / 2, depth / 2, 0.05));
  const floorBody = new CANNON.Body({ mass: 0, collisionFilterGroup: 1, collisionFilterMask: -1 });
  floorBody.addShape(floorShape);
  floorBody.userData = { collisionClass: 'floor', mesh: floorMesh }
  floorMesh.userData.physicsBody = floorBody; // Add to the array

  roomGroup.add(floorMesh);

  // Create walls
  const wallThickness = 0.1;
  const wallGeometry = new THREE.BoxGeometry(wallThickness*2, height, depth);
  const wallMaterial = new THREE.MeshBasicMaterial({ color, wireframe: true });


  if(options.walls.leftwall) {

    // Left wall
    const leftWallPosition = new THREE.Vector3((-width / 2 + wallThickness / 2) + position.x, (height/2) + position.y, (depth / 2) + position.z);
    const leftWallShape = new CANNON.Box(new CANNON.Vec3(wallThickness / 2, height / 2, depth / 2));
    const leftWallBody = new CANNON.Body({ mass: 0, collisionFilterGroup: 1, collisionFilterMask: -1 });
    leftWallBody.addShape(leftWallShape);
    const leftWallMesh = new THREE.Mesh(wallGeometry, wallMaterial);
    leftWallMesh.position.copy(leftWallPosition);
    leftWallBody.userData = { collisionClass: 'wall', mesh: leftWallMesh }
    leftWallMesh.userData.physicsBody = leftWallBody;

    roomGroup.add(leftWallMesh);

  }

  if(options.walls.rightwall) {
    // Right wall
    const rightWallPosition = new THREE.Vector3((width / 2 - wallThickness / 2) + position.x, (height/2) + position.y, (depth / 2) + position.z);
    const rightWallShape = new CANNON.Box(new CANNON.Vec3(wallThickness / 2, height / 2, depth / 2));
    const rightWallBody = new CANNON.Body({ mass: 0, collisionFilterGroup: 1, collisionFilterMask: -1 });
    rightWallBody.addShape(rightWallShape);
    const rightWallMesh = new THREE.Mesh(wallGeometry, wallMaterial);
    rightWallMesh.position.copy(rightWallPosition);
    rightWallBody.userData = { collisionClass: 'wall', mesh: rightWallMesh }
    rightWallMesh.userData.physicsBody = rightWallBody;

    roomGroup.add(rightWallMesh);
  }

  if(options.walls.backwall) {
    // Back wall
    const backWallPosition = new THREE.Vector3(0 + position.x, (height/2) + position.y, (depth + wallThickness / 2) + position.z);
    const backWallShape = new CANNON.Box(new CANNON.Vec3(width / 2, height / 2, wallThickness / 2));
    const backWallBody = new CANNON.Body({ mass: 0, collisionFilterGroup: 1, collisionFilterMask: -1 });
    backWallBody.addShape(backWallShape);
    const backWallGeometry = new THREE.BoxGeometry(width, height, wallThickness);
    const backWallMesh = new THREE.Mesh(backWallGeometry, wallMaterial);
    backWallMesh.position.copy(backWallPosition);
    backWallBody.userData = { collisionClass: 'wall', mesh: backWallMesh }
    backWallMesh.userData.physicsBody = backWallBody;

    roomGroup.add(backWallMesh);
  }

  return roomGroup;
}