import * as THREE from 'three';
import * as CANNON from "cannon";

export default (position, options) => {
  let width = options.w;
  let height = options.h;
  let depth = options.d;
  let color = options.color;

  let wallBodyMaterial = new CANNON.Material("wallBodyMaterial");
  wallBodyMaterial.friction = 0.4;
  wallBodyMaterial.restitution = 0;

  // Three.js setup
  const roomGroup = new THREE.Group();

  // Create floor
  if(options.walls.floor) {
    const floorTextureLoader = new THREE.TextureLoader();
    const floorTexture = floorTextureLoader.load(options.textureOveride ? options.textureOveride : '../floor_02.jpg');
    floorTexture.wrapS = THREE.RepeatWrapping;
    floorTexture.wrapT = THREE.RepeatWrapping;

    // Set the number of times the texture repeats
    //              70 / 20 -> 3.5
    const repeatXf = width*2 
    const repeatYf = depth*2; // Repeat 4 times along the y-axis
    floorTexture.repeat.set(repeatXf, repeatYf);

    const floorGeometry = new THREE.BoxGeometry(width, depth, 0.1);
    const floorMaterial = new THREE.MeshPhongMaterial({ map: floorTexture, opacity: 1, transparent: false });
    const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
    floorMesh.rotation.x = -Math.PI / 2; // Rotate the floor to be horizontal
    floorMesh.position.set(0 + position.x, 0 + position.y, (depth / 2) + position.z);
    // roomGroup.add(floorMesh);

    // Create Cannon.js body for the floor
    const floorShape = new CANNON.Box(new CANNON.Vec3(width / 2, depth / 2, 0.05));
    const floorBody = new CANNON.Body({ mass: 0, collisionFilterGroup: 1, collisionFilterMask: -1 });
    floorBody.material = wallBodyMaterial;
    floorBody.addShape(floorShape);
    floorBody.userData = { collisionClass: 'floor', mesh: floorMesh }
    floorMesh.userData.physicsBody = floorBody; // Add to the array

    roomGroup.add(floorMesh);
  }

  // Create walls
  const wallThickness = 0.1;

  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(options.textureOveride ? options.textureOveride : '../wall_01.jpg');
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;

  // Set the number of times the texture repeats
  const repeatX = depth/2; // Repeat 4 times along the x-axis
  const repeatY = height/2; // Repeat 4 times along the y-axis
  texture.repeat.set(repeatX, repeatY);

  // Create a material using the texture
  // const material = 

  const wallGeometry = new THREE.BoxGeometry(wallThickness*2, height, depth);
  const wallMaterial = new THREE.MeshPhongMaterial({ map: texture, opacity: 1, transparent: false });



  if(options.walls.leftwall) {

    // Left wall
    const leftWallPosition = new THREE.Vector3((-width / 2 + wallThickness / 2) + position.x, (height/2) + position.y, (depth / 2) + position.z);
    const leftWallShape = new CANNON.Box(new CANNON.Vec3(wallThickness / 2, height / 2, depth / 2));
    const leftWallBody = new CANNON.Body({ mass: 0, collisionFilterGroup: 1, collisionFilterMask: -1 });
    leftWallBody.material = wallBodyMaterial;
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
    rightWallBody.material = wallBodyMaterial;
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
    backWallBody.material = wallBodyMaterial;
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