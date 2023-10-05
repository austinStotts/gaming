import * as THREE from 'three';
import * as CANNON from "cannon";
import makeMesh from "./helpers/makeMesh.js";
import makeBody from "./helpers/makeBody.js";
import show_crosshair from "./crosshair.js";
import Player from './player.js';
import Pawn from './enemies/pawn.js';
import Pea_Shooter from './weapons/pea_shooter.js';


// camera / movement
let sensitivity = 0.0002; // CEMERA SENS ** ** **
let floor = 2;
// jumping
let isJumping = false;
let jumpStartTime = 0;
const jumpDuration = 600; // in milliseconds
const jumpHeight = 3;
const moveInterval = 150;
// PLAYER
let PLAYER = new Player('steve');
// ENEMIES
let bodiesToRemove = [];
let meshToRemove = [];
let enemies = {}
let wave = 1;
let waves = [];



window.speed = (n=0.25) => {
  if(typeof n == "number") {
    speed = n;
    return (`speed updated to: ${n}`);
  } else { return ("invalid speed value") }
}

window.sens = (n=0.0002) => {
  if(typeof n == "number") {
    sensitivity = n;
    return (`sensitivity updated to: ${n}`);
  } else { return ("invalid sensitivity value") }
}

window.position = (x, y, z) => {
  if(typeof x == "number" && typeof y == "number" && typeof z == "number") {
    camera.position.set(x, y, z)
  }
}


let updateAmmo = (player) => {
  let mag = document.getElementById("mag");
  let reserve = document.getElementById("reserve");


  mag.textContent = player.weapon.inMagazine;
  reserve.textContent = player.weapon.inReserve;
}

let updateHP = (player) => {
  let hp = document.getElementById("hp");
  hp.value = player.hp;
}

let handleDMG = (enemy, player) => {
  player.take_damage(enemy.damage);
  updateHP(player)
}

let init = () => {
  scene.add(floorMesh);
  world.addBody(floorBody);
  scene.add(zero)
  scene.add(xLine)
  scene.add(yLine)
  create_player_body(PLAYER)
  updateAmmo(PLAYER);
  updateHP(PLAYER)
  // spawn();
}


// Scene
const scene = new THREE.Scene();

// CAMERA ** ** **
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(2,5,0);
camera.lookAt(0,5,0);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.domElement.id = "canvas"

// CANNON SETUP
let world = new CANNON.World();
world.gravity.set(0,-10,0);
// world.broadphase = new CANNON.NaiveBroadphase();
// world.solver.iterations = 10;

// FLOOR
const floorGeometry = new THREE.PlaneGeometry(25,25); // Adjust the size as needed
const floorMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, wireframe: true }); //
const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
floorMesh.rotation.x = -Math.PI / 2; // Rotate the floor to be horizontal
floorMesh.position.set(0,0,0);
const floorShape = new CANNON.Plane(); // Create a plane shape for the floor
// let floorShape = new CANNON.Box(new CANNON.Vec3(500, 0.1, 500));
let floorBody = new CANNON.Body({ mass: 0, shape: floorShape }); // Make the floor immovable (mass = 0)
floorBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
floorBody.userData = {physicsMesh: floorMesh, collisionClass: "floor"}
console.log(floorBody)
// floorBody.collisionResponse = false;
floorBody.collisionFilterGroup = 1;
floorBody.collisionFilterMask = -1;
// floorBody.addEventListener('collide', (e) => {console.log(e); console.log("FLOOR HIT")})

// CREATE PLAYER BODY
let create_player_body = (player) => {
  
  
  let shape = new CANNON.Box(new CANNON.Vec3(1,2,1));
  let playerBody = new CANNON.Body({ shape: shape, mass: 1, fixedRotation: true });
  // playerBody.collisionResponse = false;
  // playerBody.fixedRotation = true;
  playerBody.position.set(2,2,0);
  // playerBody.linearDamping = 0.01;
  // playerBody.angularDamping = 0.8;
  // playerBody.fixedRotation = true;
  

  playerBody.collisionFilterGroup = 2;
  playerBody.collisionFilterMask = -1;
  playerBody.userData = {collisionClass: "player", id: `${player.id}`}
  playerBody.addEventListener("collide", playerCollision)
  // playerBody.addEventListener("collide", (event) => { 
  //   console.log("PLAYER COLLISION");
  //   console.log(event.target.userData.collisionClass);
  //   console.log(event.body.userData.collisionClass); 
  // })
  player.set_body(playerBody)
  world.addBody(playerBody);
}

let playerCollision = (event) => {
  // PLAYER.groundheight = event.body.position.y + 0.25;
}


let zero = makeMesh(1,50, 1, 0x53D996);
zero.position.set(0,0,0)

let xLine = makeMesh(500, 0.2, 1, 0x910000);
xLine.position.set(0,0,0);

let yLine = makeMesh(1, 0.2, 500, 0x910000);
yLine.position.set(0,0,0);


let get_random = (n) => {
  if((Math.floor(Math.random() * 100)) % 2 == 0) {
    return (Math.random() * n) * -1;
  } else {
    return (Math.random() * n)
  }
}


let rampGeometry = new THREE.BoxGeometry(10,0.2,10);
let rampMaterial = new THREE.MeshBasicMaterial({ color: 0x5FBBFF })
let rampMesh = new THREE.Mesh(rampGeometry, rampMaterial);
let ramp = new CANNON.Box(new CANNON.Vec3(10,0.2,10))

//______________________________________
// CHASE CUBES

let enemyCollision = (event) => {
  if(event.body.userData.collisionClass == "userProjectile" || event.target.userData.collisionClass == "userProjectile") {
    let id = event.target.userData.id;
    if(enemies[id]) {
      if(enemies[id].update_hp(PLAYER.weapon.projectileDMG)) {
        removeEnemy(event.target.userData.id);
      }
    }
    
  // } else if(event.body.userData.collisionClass == "player") {
  } else if(event.body.userData.collisionClass == "player" || event.target.userData.collisionClass == "player") {
    // console.log("\n---------------------------------\nPLAYER HIT BOX")
    // console.log("COLLISION BODY: ", event.body.userData.collisionClass);
    // console.log("COLLISION TARGET: ", event.target.userData.collisionClass);
    // console.log("---------------------------------\n")

  }
}

let spawn = () => {
  let x = wave + 1;
  for(let i = 0; i < x; i++) {
    let b = makeBody(2,2,2, 1, 100);
    let c = makeMesh(2,2,2, 0x674EA7, false);
    b.addEventListener('collide', enemyCollision) ;
    // b.fixedRotation = true;
    b.collisionFilterGroup = 3;
    b.collisionFilterMask = -1;
    c.userData.physicsBody = b;
    b.userData = {physicsMesh: c, collisionClass: "chaseBox", id: `${wave}_${i}`}
    scene.add(c);
    world.addBody(b);
    enemies[`${wave}_${i}`] = new Pawn(b, c); 
  }
}







let removeEnemy = (id) => {
  bodiesToRemove.push(enemies[id].body);
  scene.remove(enemies[id].mesh);
  delete enemies[id];
}


let move_towards_player = (mesh, body) => {
  let direction = new THREE.Vector3();
  camera.getWorldPosition(direction);
  direction.sub(mesh.position);

  const speed = 6; // Adjust this value to control the speed
  const velocity = direction.clone().normalize().multiplyScalar(speed);
  
  // Apply the velocity to the Cannon.js body
  body.velocity.set(velocity.x, -1, velocity.z);
}







// _________________________________________
// check if looking
const isLookingAt = (camera, objectToCheck, scene) => { // return true or false if camera is looking at object
    // Create a raycaster
    const raycaster = new THREE.Raycaster();

    // Get the camera's position and direction
    const cameraPosition = camera.position.clone();
    const cameraDirection = new THREE.Vector3(0, 0, -1);
    cameraDirection.applyQuaternion(camera.quaternion);

    // Set the ray's origin and direction
    raycaster.set(cameraPosition, cameraDirection);

    // Find intersections between the ray and objects in the scene
    const intersects = raycaster.intersectObject(objectToCheck, true);

    // If there are intersections, the camera is looking at the object
    return intersects.length > 0;
    
}





// _________________________________________
// Keyboard controls
const keyboardState = {};
document.addEventListener('keydown', (event) => {
    // console.log(event.key)
    // jump(event)
    keyboardState[event.key] = true;
});
document.addEventListener('keyup', (event) => {

    keyboardState[event.key] = false;
});


const playerInputs = () => {

    // Calculate the direction vector based on the camera's rotation
    const direction = new THREE.Vector3(0, 0, -1);
    direction.applyQuaternion(camera.quaternion);
  
    // console.log(camera.quaternion)
    direction.setY(0);
    direction.normalize()
    
    // if (keyboardState['ArrowUp'] || keyboardState['w']) {
    //     // Move forward
    //     PLAYER.move_player(camera, direction, PLAYER.speed, "w");
    // }
    // if (keyboardState['ArrowDown'] || keyboardState['s']) {
    //     // Move backward
    //     PLAYER.move_player(camera, direction, -PLAYER.speed, "s");
    // }
    // if (keyboardState['ArrowLeft'] || keyboardState['a']) {
    //     // Move left
    //     const leftDirection = new THREE.Vector3(-1, 0, 0);
    //     leftDirection.applyQuaternion(camera.quaternion);
    //     leftDirection.setY(0);
    //     PLAYER.move_player(camera, leftDirection, PLAYER.speed, "a");
    // }
    // if (keyboardState['ArrowRight'] || keyboardState['d']) {
    //     // Move right
    //     const rightDirection = new THREE.Vector3(1, 0, 0);
    //     rightDirection.applyQuaternion(camera.quaternion);
    //     rightDirection.setY(0);
    //     PLAYER.move_player(camera, rightDirection, PLAYER.speed, "d");
    // }

    let velocity = new CANNON.Vec3();
    if (keyboardState['ArrowUp'] || keyboardState['w']) {
      velocity.copy(direction.clone().multiplyScalar(PLAYER.acc));
      PLAYER.move_player(velocity);
    }
    if (keyboardState['ArrowDown'] || keyboardState['s']) {
      velocity.copy(direction.clone().multiplyScalar(-PLAYER.acc));
      PLAYER.move_player(velocity);
    }
    if (keyboardState['ArrowLeft'] || keyboardState['a']) {
      const leftDirection = new THREE.Vector3(-1, 0, 0);
      leftDirection.applyQuaternion(camera.quaternion);
      leftDirection.setY(0);
      velocity.copy(leftDirection.clone().multiplyScalar(PLAYER.acc));
      PLAYER.move_player(velocity);
    }
    if (keyboardState['ArrowRight'] || keyboardState['d']) {
      const rightDirection = new THREE.Vector3(1, 0, 0);
      rightDirection.applyQuaternion(camera.quaternion);
      rightDirection.setY(0);
      velocity.copy(rightDirection.clone().multiplyScalar(PLAYER.acc));
      PLAYER.move_player(velocity);
    }
    if (keyboardState['r']) {
      reload(PLAYER);
    }
    // if(camera.position.y < floor) { camera.position.y = floor }
    
}

let isReloading = false;

let reload = (player) => {
  // console.log("RELOADING")
  if(!isReloading) {
    isReloading = true;
    setTimeout(() => {player.weapon.reload(); isReloading=false; updateAmmo(PLAYER)}, player.weapon.reloadTime);
  } else {
    // console.log("ALREADY RELOADING")
  }
}




// JUMPING
// Add event listener for space bar keypress
document.addEventListener("keydown", (event) => {
  if (event.key === " " && !isJumping) { // Check for space bar press
    jump();
  }
});

const jump = () => {
  PLAYER.body.position.y = 10;
}

// Define the jump function
function jump_() {
    isJumping = true;
    jumpStartTime = Date.now();
  
    const initialY = camera.position.y;
    const targetY = initialY + jumpHeight;
  
    function animateJump() {
      const currentTime = Date.now();
      const elapsedTime = currentTime - jumpStartTime;
  
      if (elapsedTime >= jumpDuration) {
        // Jump animation is complete
        camera.position.y = initialY;
        isJumping = false;
        console.log(camera.position.y)
        return;
      }
  
      const t = elapsedTime / jumpDuration;
      camera.position.y = initialY + jumpHeight * Math.sin(t * Math.PI);
      // console.log(camera.position.y)
      requestAnimationFrame(animateJump);
    }
  
    animateJump();
}


// _________________________________________
// Mouse controls
const cameraRotation = new THREE.Euler(0, 0, 0, 'YXZ');
let mouseState = {
    x: 0,
    y: 0,
    down: false
};
// camera.rotation.x.toFixed(90);
document.addEventListener('mousemove', (event) => {
    if (!keyboardState['Alt']) {
        // const dy = event.clientY - mouseState.y;
        
        cameraRotation.x -= event.movementY * sensitivity;
        cameraRotation.y -= event.movementX * sensitivity;
        cameraRotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, cameraRotation.x));
        
        camera.rotation.copy(cameraRotation)
        
    }
    mouseState.x = event.movementX;
    mouseState.y = event.movementY;
});




let canvas = document.querySelector("canvas");
canvas.onclick = (e) => {
    // preventDefault()
    canvas.requestPointerLock = canvas.requestPointerLock || canvas.mozRequestPointerLock || canvas.webkitRequestPointerLock;
    canvas.requestPointerLock();
}

// _________________________
// projectile

let removeProjectile = (mesh, body, time) => {
  let elapsedTime = 0;
  const removeInterval = setInterval(() => {
      elapsedTime += 1 / 60; // Assuming a 60Hz frame rate
      if (elapsedTime >= time) {
          // Remove the projectile from the scene and world
          scene.remove(mesh);
          world.remove(body);
          clearInterval(removeInterval); // Stop the interval
      }
  }, 1000 / 60); // Run every frame
}

let projectiles = [];

function createProjectile(player) {
  if(player.weapon.inMagazine > 0 && !isReloading) {
    player.weapon.removeAmmo()
    updateAmmo(player)

    let p = player.weapon.createProjectile(camera);
    // console.log(p)
    for(let i = 0; i < p.body.length; i++) {
      // console.log(p.mesh[i])
      scene.add(p.mesh[i]);
      world.addBody(p.body[i]);
  
      projectiles.push({
        mesh: p.mesh[i],
        body: p.body[i],
        removeAfterSeconds: p.body[i].userData.removeafterMS
      });
    }

  }
}

let update_projectiles = () => {
  for (let i = projectiles.length - 1; i >= 0; i--) {
    const projectile = projectiles[i];

    // Update the Three.js mesh position based on the Cannon.js body
    projectile.mesh.position.copy(projectile.body.position);
    removeProjectile(projectile.mesh, projectile.body, projectile.removeAfterSeconds)
  }
}



document.addEventListener('click', () => {createProjectile(PLAYER)});


let isMouseHeldDown = false;
let moveTimer;

// Function to start moving the object forward at intervals
function startContinuousMove() {
  moveTimer = setInterval(() => {
    if (isMouseHeldDown) {
      createProjectile(PLAYER)
    }
  }, moveInterval);
}

// Function to stop moving the object forward
function stopContinuousMove() {
  clearInterval(moveTimer);
}

// Event listener for mouse down
document.addEventListener('mousedown', () => {
  isMouseHeldDown = true;
  startContinuousMove();
});

// Event listener for mouse up
document.addEventListener('mouseup', () => {
  isMouseHeldDown = false;
  stopContinuousMove();
});

let removeBodies = (body, i) => {
  console.log(enemies)
  if(body) { 
    world.remove(body)
    bodiesToRemove.splice(i, 1);
  }

}

let removeMesh = (mesh, i) => {
  if(mesh) {
    scene.remove(mesh);
    shapesToRemove.splice(i, 1);
  }
}



// update every frame
let updateEnemyPhysics = () => {
  Object.keys(enemies).forEach((key) => {
    move_towards_player(enemies[key].mesh, enemies[key].body)
    enemies[key].mesh.position.copy(enemies[key].body.position);
    enemies[key].mesh.quaternion.copy(enemies[key].body.quaternion);
  })
}

let updateGame = () => {
  // if(Object.keys(enemies).length <= 0) {
  //   wave += 1;
  //   spawn();
  // }

  
  
  
  playerMesh.position.copy(PLAYER.body.position);
  playerMesh.quaternion.copy(PLAYER.body.quaternion);
  // playerMesh.rotation.copy(PLAYER.body.rotation);
  camera.position.copy(PLAYER.body.position);
  camera.position.y += 2.5;
}




setInterval(() => {
  console.log("\nBODY POSITION Y: ", PLAYER.body.position.y);
  // console.log(PLAYER.body)
  console.log("VELOCITY: ",PLAYER.body.velocity);
  // console.log("\nCAMERA", camera.position.y);
  // console.log("FLOOR: ", floorBody.position);
}, 3000);



let playerGeometry = new THREE.BoxGeometry(2,4,2);
let playerMaterial = new THREE.MeshBasicMaterial({ color: 0xFE90C9, wireframe: true })
let playerMesh = new THREE.Mesh(playerGeometry,playerMaterial);
scene.add(playerMesh)
// _________________________________________
// ||||||||||||||||||||||||||||||||||||||||
// Animation loop
const animate = () => {

  world.step(1/60);

  



  update_projectiles();
  updateEnemyPhysics();
  playerInputs();
  updateGame();

  bodiesToRemove.forEach(removeBodies);
  meshToRemove.forEach(removeMesh);
    
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

init();
animate();
