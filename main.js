import * as THREE from 'three';
import * as CANNON from "cannon";
import makeMesh from "./helpers/makeMesh.js";
import makeBody from "./helpers/makeBody.js";
import show_crosshair from "./crosshair.js";
import Player from './player.js';
import Pawn from './enemies/pawn.js';
import Rook from './enemies/rook.js';
import Pea_Shooter from './weapons/pea_shooter.js';
import makeRamp from './helpers/makeRamp.js';
import makeRoom from './helpers/makeRoom.js';

import map_functions from "./map.js";

import small_ammo from './items/small_ammo.js';
import shotgun_ammo from './items/shotgun_ammo.js'


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

let active_items = [];
let itemsToRemove = [];
let isTakingDamage = false;


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

// window.position = (x, y, z) => {
//   if(typeof x == "number" && typeof y == "number" && typeof z == "number") {
//     camera.position.set(x, y, z)
//   }
// }



let updateAmmo = (player) => {
  let mag = document.getElementById("mag");
  let reserve = document.getElementById("reserve");


  mag.textContent = player.weapon.inMagazine;
  let foundAmmo = false;
  for(let i = 0; i < player.inventory.length; i++) {
    if(player.inventory[i] != undefined) {
      if(player.inventory[i].id == player.weapon.ammo_id) {
        reserve.textContent = player.inventory[i].count;
        foundAmmo = true;
        break
      }
    }
  }
  if(!foundAmmo) {reserve.textContent = 0}
  // reserve.textContent = player.weapon.inReserve;
}

let update_inv_ui = () => {
  let w1_label = document.getElementById("weapon-one-label");
  w1_label.textContent = PLAYER.weapon.display_name
  let w2_label = document.getElementById("weapon-two-label");
  w2_label.textContent = PLAYER.secondary.display_name
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

  spawn();
  build_inventory();
  giveItem(new small_ammo(30));
  giveItem(new small_ammo(150));
  updateAmmo(PLAYER);
  updateHP(PLAYER);
  update_inv_ui();
}

document.getElementById("try-again").addEventListener("click", () => { reset() })

let reset = () => {
  clearEnemies();
  clearItems();

  let old_player = JSON.parse(window.localStorage.getItem("player_data"));
  PLAYER.hp = old_player.hp;
  PLAYER.inventory = old_player.inventory;
  wave = old_player.wave;
  PLAYER.weapon = old_player.weapon;
  PLAYER.secondary = old_player.secondary;
  PLAYER.body.position.set(0, 2, 0);
  isAlreadyDead = false;
  gameover.close();
  isDeathOpen = false;
  toggleCursorLock();
  document.getElementById("grayout").style.display = "none"
  spawn();
  updateHP();
  updateAmmo();
  // delete all enemies
  // save inv and stats after each wave
  // reset all values to pre wave
  // move player and respawn enemies
}



// Scene
const scene = new THREE.Scene();


// CAMERA ** ** **
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(2,5,0);
// camera.lookAt(0,5,-5);


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
// console.log(floorBody);
floorBody.collisionFilterGroup = 1;
floorBody.collisionFilterMask = -1;


// CREATE PLAYER BODY
let create_player_body = (player) => {
  let shape = new CANNON.Box(new CANNON.Vec3(1,2,1));
  let playerBody = new CANNON.Body({ shape: shape, mass: 50, fixedRotation: true });
  playerBody.position.set(0,2,0);
  playerBody.collisionFilterGroup = 1;
  playerBody.collisionFilterMask = 1;
  playerBody.userData = {collisionClass: "player", id: `${player.id}`}
  playerBody.addEventListener("collide", playerCollision)
  player.set_body(playerBody)
  world.addBody(playerBody);
}

let playerCollision = (event) => {
  if(event.body.userData.collisionClass == "floor") { isJumping=false }
  // if(event.body.userData.collisionClass != "floor") { console.log(event) }
}

// let zero = makeMesh(1,50, 1, 0x53D996);
// zero.position.set(0,0,0)

let xLine = makeMesh(500, 0.2, 1, 0x700050);
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




//`./item_images/${PLAYER.inventory[i].item_img}`;
let updateInventory = () => {
  let inv = document.getElementById("items-wrapper");
  console.log(inv.childNodes)
  inv.childNodes.forEach((cell,i) => {
    if(PLAYER.inventory[i] != undefined && cell.childNodes.length<1) {

      let img = document.createElement("img");
      img.src = `https://sl-gaming.s3.amazonaws.com/inv-assets/${PLAYER.inventory[i].img}`;
      img.classList.add("item");
      img.ondragstart = () => false;

      let counter = document.createElement("div");
      counter.classList.add("counter");
      counter.textContent = PLAYER.inventory[i].count;

      cell.appendChild(img);
      cell.appendChild(counter);

    } else if (PLAYER.inventory[i] != undefined && cell.childNodes.length>1) {
      cell.childNodes[1].textContent = PLAYER.inventory[i].count;
      cell.childNodes[0].src = `https://sl-gaming.s3.amazonaws.com/inv-assets/${PLAYER.inventory[i].img}`
    } else {
      if(cell.childNodes.length>0) {
        console.log("REMOVING", i)
        // for(let i = 0; i < cell.childNodes.length; i++) { cell.removeChild(cell.childNodes[i]) }
        cell.removeChild(cell.childNodes[1])
        cell.removeChild(cell.childNodes[0])
      }
    }
  })
}



let isInventoryOpen = false;
let toggle_inventory = () => {
  let inv = document.getElementById("inventory");
  if(isInventoryOpen) {
    inv.close();
    isInventoryOpen = false;
    toggleCursorLock();
  } else {
    updateInventory();
    inv.showModal();
    isInventoryOpen = true;
    toggleCursorLock();
  }
}

let toggleCursorLock = () => {
  if(!isInventoryOpen && !isAlreadyDead) {
    canvas.requestPointerLock = canvas.requestPointerLock || canvas.mozRequestPointerLock || canvas.webkitRequestPointerLock;
    canvas.requestPointerLock();
  } else {
    // canvas.exitPointerLock = canvas.exitPointerLock || canvas.mozExitPointerLock || canvas.webkitExitPointerLock;
    document.exitPointerLock();
    console.log("EXIT POINTER LOCK")
  }
}


let giveItem = (item) => {
  if(item.isStack) {
    let didGive = false;
    for(let i = 0; i < PLAYER.inventory.length; i++) {
      if(!didGive && PLAYER.inventory[i] != undefined) {
        if(item.id == PLAYER.inventory[i].id) {
          PLAYER.inventory[i].count += item.count;
          updateAmmo(PLAYER);
          didGive = true;
          break
        }
      }
    }
    if(!didGive) {
      for(let i = 0; i < PLAYER.inventory.length; i++) {
        if(PLAYER.inventory[i] == undefined) {
          PLAYER.inventory[i] = item;
          updateAmmo(PLAYER);
          break
        }
      }
    }
  } else {
    let didGive = false;
    for(let i = 0; i < PLAYER.inventory.length; i++) {
      if(PLAYER.inventory[i] == undefined) {
        PLAYER.inventory[i] = item;
        break
      }
    }
    if(!didGive) { console.log("inventory full") }
  }
  // console.log(PLAYER.inventory)
}

let inv_start;
let inv_end;

let inv_drop = (event, id) => {
  inv_end = id;
  [PLAYER.inventory[inv_start], PLAYER.inventory[inv_end]] = [PLAYER.inventory[inv_end], PLAYER.inventory[inv_start]];
  console.log(PLAYER.inventory)
  updateInventory();
}
let inv_pickup = (event, id) => {
  inv_start = id;
}


let build_inventory = () => {
  
  let inventory = new Array(40).fill(undefined);
  let element = document.getElementById("items-wrapper");
  inventory.forEach((item, i) => {
    let div = document.createElement("div");
    div.classList.add("inventory-cell", `cellid-${i}`);
    div.onmouseup = (e) => {inv_drop(e, i)};
    div.onmousedown = (e) => {inv_pickup(e, i)};
    element.appendChild(div);
  })
  PLAYER.inventory = inventory;
}

let test_ammo = new shotgun_ammo(30);


let dropItem = (item, position) => {
  item.body.position.set(position.x, position.y, position.z)
  item.body.addEventListener('collide', (event) => {
    if(event.body.userData.collisionClass == "player" && !item.body.userData.hasBeenCollected) {
      item.body.userData.hasBeenCollected = true;
      giveItem(item);
      item.toBeDeleted = true;
    }
  })
  active_items.push({item, createdAt: Date.now()})
  world.addBody(item.body);
  scene.add(item.mesh);
}

dropItem(test_ammo, new CANNON.Vec3(0,1,-30))




//
// WORLD GEN
//

const light = new THREE.AmbientLight( 0x404040 ); // soft white light
light.position.set(0,30,0)
scene.add( light );

let build = (position, angle, options) => {
  let roomGroup = makeRoom(position, options);
  roomGroup.traverse((mesh) => {
    if(mesh.isMesh && mesh.userData.physicsBody != undefined) {
      let body = mesh.userData.physicsBody;
      function rotateObject(object, axis, angle) {
        let quaternion = new THREE.Quaternion().setFromAxisAngle(axis.normalize(), angle);
        object.quaternion.multiplyQuaternions(quaternion, object.quaternion);
        let inverseQuaternion = quaternion.clone().conjugate();
        object.position.applyQuaternion(inverseQuaternion);

        body.position.copy(object.position);
        body.quaternion.copy(object.quaternion)
      }

      // Assuming 'object' is the Three.js object you want to rotate
      let axis = new THREE.Vector3(0, 1, 0); // The axis around which you want to rotate
      rotateObject(mesh, axis, angle);
      world.addBody(body);
    }
  })
  scene.add(roomGroup);
}

// let [rampMesh, rampBody] = makeRamp(5, 10, {rotation: (-Math.PI / 4), angle: (-Math.PI / 6)});
// rampBody.position.set(7.5, 2.5, 20);
// scene.add(rampMesh);
// world.addBody(rampBody);

map_functions.forEach(args => { build(args[0], args[1], args[2]) })
// position, rotation, options



















// __ __ __ __ __ __ __ __ __ __ __
// ENEMIES

let handleDrops = (enemy) => {
  let index = Math.ceil(Math.random() * 100);
  if(enemy.drop_table[index] != undefined) {
    dropItem(enemy.drop_table[index], enemy.body.position)
  }
}

let enemyCollision = (event) => {
  if(event.body.userData.collisionClass == "userProjectile" || event.target.userData.collisionClass == "userProjectile") {
    let id = event.target.userData.id;
    if(enemies[id]) {
      if(enemies[id].update_hp(PLAYER.weapon.projectileDMG)) {
        handleDrops(enemies[id])
        removeEnemy(event.target.userData.id);
      }
    }
  } else if(event.body.userData.collisionClass == "player" || event.target.userData.collisionClass == "player") {
    let id = event.target.userData.id
    if(!isTakingDamage) {
      isTakingDamage = true;
      handleDMG(enemies[id], PLAYER);
      setTimeout(() => { isTakingDamage = false }, 800)
    }
    
  }
}


let spawn = () => {
  let x = wave + 1;

  // spawn rooks
  for(let i = 0; i < Math.floor(wave/10)+1; i++) {
    let geometry = new THREE.SphereGeometry(3);
    let material = new THREE.MeshBasicMaterial({ color: 0x005599 });
    let mesh = new THREE.Mesh(geometry, material);

    let bodyShape = new CANNON.Sphere(3);
    let body = new CANNON.Body({ shape: bodyShape, mass: 20 });
    body.collisionFilterGroup = 1;
    body.collisionFilterMask = -1;
    body.position.set(get_random(100), 3, get_random(100));
    body.addEventListener('collide', enemyCollision);
    body.userData = {physicsMesh: mesh, collisionClass: "rook", id: `${wave}_${i}_rook`}

    mesh.userData.physicsBody = body;
    mesh.position.copy(body.position)

    scene.add(mesh);
    world.addBody(body);


    enemies[`${wave}_${i}_rook`] = new Rook(body, mesh); 
  }

  // spawn pawns
  for(let i = 0; i < x; i++) {
    let b = makeBody(2,2,2, 1, 100);
    let c = makeMesh(2,2,2, 0x674EA7, false);
    b.addEventListener('collide', enemyCollision) ;
    // b.fixedRotation = true;
    b.collisionFilterGroup = 1;
    b.collisionFilterMask = -1;
    b.ccdSpeedThreshold = 10;  // Adjust the threshold as needed
    b.ccdIterations = 100; 
    c.userData.physicsBody = b;
    b.userData = {physicsMesh: c, collisionClass: "pawn", id: `${wave}_${i}_pawn`}
    scene.add(c);
    world.addBody(b);
    enemies[`${wave}_${i}_pawn`] = new Pawn(b, c); 
  }
  console.log(enemies)
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
    case "i":
      toggle_inventory();
      break
    case "2":
      swap_weapons();
      break
    case "k":
      clearEnemies();
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
  if(!isInventoryOpen && !isAlreadyDead) {
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
}






















let isReloading = false;
let reload = (player) => {
  if(!isReloading) {
    isReloading = true;
    setTimeout(() => {player.weapon.reload(player); isReloading=false; updateAmmo(PLAYER)}, player.weapon.reloadTime);
  } else {}
}

let isSwappingWeapons = false;

let swap_weapons = () => {
  animateSwap();
  setTimeout(() => {isSwappingWeapons = false; updateAmmo(PLAYER)}, PLAYER.secondary.swap_time)
  isSwappingWeapons = true;
  let holder = PLAYER.weapon;
  PLAYER.weapon = PLAYER.secondary;
  PLAYER.secondary = holder;
  // updateAmmo(PLAYER);
}

let animateSwap = () => {
  let start = Date.now();
  let time = PLAYER.secondary.swap_time;
  let progress = document.getElementById("weapon-loader");
  progress.style.display = "block";
  let id = setInterval(() => {
    console.log(progress.value)
    if(Date.now() >= start + time) {
      progress.value = 0;
      progress.style.display = "none";
      clearInterval(id)
    } else {
      progress.value += 1;
    }
    
  },time/100)
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
  if(!isJumping) {
    isJumping = true;
    jumpStartTime = Date.now();
    PLAYER.body.velocity.y = 10;
  


  }
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
  if (!isInventoryOpen) {
      
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
    console.log(projectiles)
    world.remove(projectile.body);
    scene.remove(projectile.mesh);
    return true
  } else { return false }
}

let projectiles = [];

function createProjectile(player) {
  if(player.weapon.inMagazine > 0 && !isReloading && !isInventoryOpen && !isSwappingWeapons && !isAlreadyDead) {
    player.weapon.removeAmmo(player);
    updateAmmo(player);
    let p = player.weapon.createProjectile(camera);

    // CAMERA KICK WIP - - - - 
    var rotationMatrix = new THREE.Matrix4();
    rotationMatrix.makeRotationAxis(new THREE.Vector3(1, 0, 0), player.weapon.camera_kick);
    camera.applyMatrix4(rotationMatrix);
    cameraRotation.x += player.weapon.camera_kick;

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
canvas.addEventListener('mousedown', () => {
  isMouseHeldDown = true;
  startContinuousMove();
});

// Event listener for mouse up
canvas.addEventListener('mouseup', () => {
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

let saveWave = () => {
  window.localStorage.setItem("player_data", JSON.stringify({
    hp: PLAYER.hp,
    inventory: PLAYER.inventory,
    weapon: PLAYER.weapon,
    secondary: PLAYER.secondary,
    wave: wave
  }))
}

let clearItems = () => {
  active_items.forEach(item => {
    itemsToRemove.push(item);
  })
  active_items = [];
}

let clearEnemies = () => {
  Object.keys(enemies).forEach((key) => {
    bodiesToRemove.push(enemies[key].body);
    scene.remove(enemies[key].mesh);
    delete enemies[key];
  })
}

// update every frame
let updateEnemyPhysics = () => {
  Object.keys(enemies).forEach((key) => {
    move_towards_player(enemies[key].mesh, enemies[key].body)
    enemies[key].mesh.position.copy(enemies[key].body.position);
    enemies[key].mesh.quaternion.copy(enemies[key].body.quaternion);
  })

  if(Object.keys(enemies).length < 1) {
    wave += 1;
    saveWave();
    spawn();
  }
}

let removeItems = (item, i) => {
  world.remove(item.body);
  scene.remove(item.mesh);
}

let updateItems = () => {
  active_items.forEach((item, i) => {
    item.item.mesh.position.copy(item.item.body.position);
    item.item.mesh.rotation.y += 0.05;
    item.item.mesh.rotation.z += 0.01;
    if(item.item.toBeDeleted == true) {
      removeItems(item.item)
      active_items.splice(i, 1);
    }
  })
}

let updateGame = () => {

  // rampMesh.position.copy(rampBody.position);
  // rampMesh.quaternion.copy(rampBody.quaternion);
  
  PLAYER.body.position.y += 0.004;
  playerMesh.position.copy(PLAYER.body.position);
  playerMesh.quaternion.copy(PLAYER.body.quaternion);

  camera.position.copy(PLAYER.body.position);
  camera.position.y += 2.5;
}


let isDeathOpen = false;
let isAlreadyDead = false;
let gameover = document.getElementById("gameover");

let checkHP = () => {
  if(!isAlreadyDead) {
    if(PLAYER.hp <= 0) {
      isAlreadyDead = true;
      console.log("YOU DIED");

      document.getElementById("grayout").style.display = "block"
      if(isDeathOpen) {
        gameover.close();
        isDeathOpen = false;
        toggleCursorLock();
      } else {
        gameover.showModal();
        isDeathOpen = true;
        toggleCursorLock();
      }
    }
  } 
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

  let rate = 1/60;
  world.step(rate, rate, 10);

  update_projectiles();
  updateEnemyPhysics();
  playerInputs();
  updateGame();
  updateItems();
  checkHP();

  bodiesToRemove.forEach(removeBodies);
  meshToRemove.forEach(removeMesh);
    
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

init();
animate();
