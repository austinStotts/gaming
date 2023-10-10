import * as THREE from 'three';
import * as CANNON from "cannon";
import makeMesh from "./helpers/makeMesh.js";
import makeBody from "./helpers/makeBody.js";
import show_crosshair from "./crosshair.js";
import Player from './player.js';
import Pawn from './enemies/pawn.js';
import Pea_Shooter from './weapons/pea_shooter.js';
import makeRamp from './helpers/makeRamp.js';
import makeRoom from './helpers/makeRoom.js';


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
  // scene.add(zero)
  scene.add(xLine)
  scene.add(yLine)
  create_player_body(PLAYER)
  updateAmmo(PLAYER);
  updateHP(PLAYER)
  spawn();
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
world.quatNormalizeSkip = 0;
world.quatNormalizeFast = false;
world.defaultContactMaterial.contactEquationStiffness = 1e9;
world.defaultContactMaterial.contactEquationRelaxation = 4;
world.gravity.set(0,-10,0);
world.broadphase = new CANNON.NaiveBroadphase();
let phyMaterial = new CANNON.Material("slipperyMaterial");
let phyContactMaterial = new CANNON.ContactMaterial(phyMaterial, phyMaterial, 0.0, 0.3);
world.addContactMaterial(phyContactMaterial)
world.defaultContactMaterial.friction = 0.05; // ** ** ** this one
var solver = new CANNON.GSSolver();
solver.iterations = 7;
solver.tolerance = 0.1;
world.solver = new CANNON.SplitSolver(solver);
world.solver.iterations = 7;


let [rampMesh, rampBody] = makeRamp(10, 10);
rampBody.position.set(5,2.5,5);
scene.add(rampMesh);
world.addBody(rampBody)


// FLOOR
const floorGeometry = new THREE.PlaneGeometry(1000,1000);
const floorMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, wireframe: true });
const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
floorMesh.rotation.x = -Math.PI / 2; // Rotate the floor to be horizontal
floorMesh.position.set(0,0,0);
const floorShape = new CANNON.Plane();
let floorBody = new CANNON.Body({ mass: 0, shape: floorShape });
floorBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
floorBody.userData = {physicsMesh: floorMesh, collisionClass: "floor"}
console.log(floorBody);
floorBody.collisionFilterGroup = 1;
floorBody.collisionFilterMask = -1;


// CREATE PLAYER BODY
let create_player_body = (player) => {
  let shape = new CANNON.Box(new CANNON.Vec3(1,2,1));
  let playerBody = new CANNON.Body({ shape: shape, mass: 50, fixedRotation: true });
  playerBody.position.set(2,2,0);
  playerBody.collisionFilterGroup = 2;
  playerBody.collisionFilterMask = -1;
  playerBody.userData = {collisionClass: "player", id: `${player.id}`}
  playerBody.addEventListener("collide", playerCollision)
  player.set_body(playerBody)
  world.addBody(playerBody);
}

let playerCollision = (event) => {
  
}

// let zero = makeMesh(1,50, 1, 0x53D996);
// zero.position.set(0,0,0)

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



//
// WORLD GEN
//


const light = new THREE.AmbientLight( 0x404040 ); // soft white light
light.position.set(0,30,0)
scene.add( light );

let build = (offset) => {
  let { roomGroup, cannonBodies } = makeRoom(20, 12, 30, 0x595151);
  scene.add(roomGroup);
  for (const body of cannonBodies) {
    let origin = new CANNON.Vec3().copy(body.position);
    body.position = new CANNON.Vec3(origin.x + offset.x, origin.y + offset.y, origin.z + offset.z);
    body.userData.mesh.position.copy(body.position)
    world.addBody(body);
  }
}

build({ x: 5, y: 6, z: 8.5, w: 0, })
build({ x: 25, y: 6, z: 8.5, w: 0, })
build({ x: -15, y: 6, z: 8.5, w: 0, })
build({ x: 5, y: 0, z: 8.5, w: 0, })

















// __ __ __ __ __ __ __ __ __ __ __
// ENEMIES

let enemyCollision = (event) => {
  if(event.body.userData.collisionClass == "userProjectile" || event.target.userData.collisionClass == "userProjectile") {
    let id = event.target.userData.id;
    if(enemies[id]) {
      if(enemies[id].update_hp(PLAYER.weapon.projectileDMG)) {
        removeEnemy(event.target.userData.id);
      }
    }
  } else if(event.body.userData.collisionClass == "player" || event.target.userData.collisionClass == "player") {}
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
    b.ccdSpeedThreshold = 10;  // Adjust the threshold as needed
    b.ccdIterations = 100; 
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
// Keyboard controls
const keyboardState = {};
document.addEventListener('keydown', (event) => {
    keyboardState[event.key] = true;
});
document.addEventListener('keyup', (event) => {
    keyboardState[event.key] = false;
});



// ______________________________________________________________________
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// NEW PLAYER INPUT FUNCTION

let keys = {};

let onKeyDown = (event) => {
  switch (event.key) {
    case "w":
      keys.W = true;
      break;
    case "a":
      keys.A = true;
      break;
    case "s":
      keys.S = true;
      break;
    case "d":
      keys.D = true;
      break;
    case "r":
      reload(PLAYER);
      break
  }
}

let onKeyUp = (event) => {
  switch (event.key) {
    case "w":
      keys.W = false;
      break;
    case "a":
      keys.A = false;
      break;
    case "s":
      keys.S = false;
      break;
    case "d":
      keys.D = false;
      break;
  }
}

window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);

let playerInputs = () => {
  let velocity = new THREE.Vector3();
  let direction = new THREE.Vector3();
  direction.set(0, 0, 0);

  if (keys.W) direction.z -= 1;
  if (keys.A) direction.x -= 1;
  if (keys.S) direction.z += 1;
  if (keys.D) direction.x += 1;

  direction.normalize();
  const rotation = new THREE.Euler(0, camera.rotation.y, 0, "XYZ");
  velocity.copy(direction).applyEuler(rotation).multiplyScalar(PLAYER.acc);
  let c_velocity = new CANNON.Vec3().copy(velocity);
  PLAYER.move_player(c_velocity)
}






















let isReloading = false;
let reload = (player) => {
  if(!isReloading) {
    isReloading = true;
    setTimeout(() => {player.weapon.reload(); isReloading=false; updateAmmo(PLAYER)}, player.weapon.reloadTime);
  } else {}
}



// JUMPING
// Add event listener for space bar keypress
document.addEventListener("keydown", (event) => {
  if (event.key === " " && !isJumping) { // Check for space bar press
    jump();
  }
});

// const jump = () => {
//   PLAYER.body.position.y = 10;
// }

// Define the jump function
function jump() {
    isJumping = true;
    jumpStartTime = Date.now();
    PLAYER.body.velocity.y = 10;
  
    function animateJump() {
      const currentTime = Date.now();
      const elapsedTime = currentTime - jumpStartTime;
  
      if (elapsedTime >= jumpDuration) {
        isJumping = false;
        return;
      }
      const t = elapsedTime / jumpDuration;
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

document.addEventListener('mousemove', (event) => {
  if (!keyboardState['Alt']) {
      
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
    canvas.requestPointerLock = canvas.requestPointerLock || canvas.mozRequestPointerLock || canvas.webkitRequestPointerLock;
    canvas.requestPointerLock();
}



// _________________________
// projectile

let removeProjectile = (projectile) => {
  let deleteAt = projectile.createdAt + projectile.removeAfterMS;
  if(deleteAt < Date.now()) { 
    world.remove(projectile.body);
    scene.remove(projectile.mesh)
    return true
  }
}

let projectiles = [];

function createProjectile(player) {
  if(player.weapon.inMagazine > 0 && !isReloading) {
    player.weapon.removeAmmo()
    updateAmmo(player)
    let p = player.weapon.createProjectile(camera);
    for(let i = 0; i < p.body.length; i++) {
      scene.add(p.mesh[i]);
      world.addBody(p.body[i]);
  
      projectiles.push({
        mesh: p.mesh[i],
        body: p.body[i],
        removeAfterMS: p.body[i].userData.removeAfterMS,
        createdAt: Date.now()
      });
    }

  }
}

let update_projectiles = () => {
  for (let i = projectiles.length - 1; i >= 0; i--) {
    const projectile = projectiles[i];
    projectile.mesh.position.copy(projectile.body.position);
    if(removeProjectile(projectile)) { projectiles.splice(i, 1) } ;
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

  rampMesh.position.copy(rampBody.position);
  rampMesh.quaternion.copy(rampBody.quaternion);
  
  PLAYER.body.position.y += 0.004;
  playerMesh.position.copy(PLAYER.body.position);
  playerMesh.quaternion.copy(PLAYER.body.quaternion);

  camera.position.copy(PLAYER.body.position);
  camera.position.y += 2.5;
}



// add console.logs
setInterval(() => {
  // console.log("\nBODY POSITION Y: ", PLAYER.body.position.y);
  // console.log(PLAYER.body)
  // console.log("VELOCITY: ",PLAYER.body.velocity);
  // console.log("\nCAMERA", camera.position.y);
  // console.log("FLOOR: ", floorBody.position);
}, 3000);



let playerGeometry = new THREE.BoxGeometry(2,4,2);
let playerMaterial = new THREE.MeshBasicMaterial({ color: 0xFE90C9, wireframe: true })
let playerMesh = new THREE.Mesh(playerGeometry,playerMaterial);
scene.add(playerMesh);


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
