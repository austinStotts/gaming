import * as THREE from 'three';
import * as CANNON from "cannon";
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
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
import waves from "./waves.js";

import Health_pack from "./items/health_pack.js";
import small_ammo from './items/small_ammo.js';
import shotgun_ammo from './items/shotgun_ammo.js'
import energy_ammo from './items/energy_ammo.js';
import Pulse_Bomb from './weapons/pulse_bomb.js';
import Shotgun from './weapons/shotgun.js';


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
// let waves = [];

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
  let w1_model = document.getElementById("weapon-one-model");
  
  const w1_scene = new THREE.Scene();
  const w1_camera = new THREE.PerspectiveCamera(75, 160 / 30, 0.1, 1000);
  // w1_camera.position.set(2,5,0); 
  const w1_renderer = new THREE.WebGLRenderer();
  w1_renderer.setSize(160, 30);
  w1_model.appendChild(w1_renderer.domElement);
  w1_renderer.domElement.id = "w1_canvas"

  let textGeometry;
  let textMesh;
  
  let f = "./fonts/helvetiker_bold.typeface.json"
  let loader = new FontLoader()
  loader.load(f, (font) => {
    textGeometry = new TextGeometry(PLAYER.weapon.display_name, {

      font: font,
      size: 30,
      height: 5,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 1,
      bevelSize: 0.5,
      bevelSegments: 3
  
    });
  




    const textMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });

    textMesh = new THREE.Mesh(textGeometry, textMaterial);
    textMesh.position.set(40,-10,40);
    textMesh.rotation.y = (-Math.PI / 2) *2;
    w1_scene.add(textMesh);

    w1_camera.position.z = 0;
    w1_camera.lookAt(0,0,2)

  })

  function w1_animate() {
    requestAnimationFrame(w1_animate);
    if(textMesh) {
      textMesh.rotation.x += 0.01;
      textMesh.rotation.y += 0.025;
    }

    w1_renderer.render(w1_scene, w1_camera);
  }

  w1_animate();

  let w2_label = document.getElementById("weapon-two-label");
  w2_label.textContent = PLAYER.secondary.display_name
}

let updateHP = (player) => {
  let hp = document.getElementById("hp");
  hp.value = player.hp;
}

let updateWave = () => {
  let w = document.getElementById("wave");
  w.textContent = wave;
}

let handleDMG = (enemy, player) => {
  player.take_damage(enemy.damage);
  updateHP(player)
}

let getWeapon = (id) => {
  if(id == "pea_shooter") { return Pea_Shooter }
  else if(id == "shotgun") { return Shotgun }
}

let init = () => {
  scene.add(floorMesh);
  world.addBody(floorBody);
  // scene.add(zero)
  // scene.add(xLine)
  // scene.add(yLine)
  create_player_body(PLAYER)

  spawn();
  build_inventory();
  giveItem(new small_ammo(30));
  giveItem(new small_ammo(150));
  giveItem(new energy_ammo(150));
  updateAmmo(PLAYER);
  updateHP(PLAYER);
  update_inv_ui();
  updateWave();
}

document.getElementById("try-again").addEventListener("click", () => { reset() })

let reset = () => {
  if(window.localStorage.getItem("player_data") != undefined) {
    clearEnemies();
    clearItems();
    let old_player = JSON.parse(window.localStorage.getItem("player_data"));
    PLAYER.hp = old_player.hp;
    PLAYER.inventory = old_player.inventory;
    wave = old_player.wave;
    let w = getWeapon(old_player.weapon.id);
    let s = getWeapon(old_player.secondary.id);
    PLAYER.weapon = new w(old_player.weapon.inMagazine);
    PLAYER.secondary = new s(old_player.secondary.inMagazine);
    PLAYER.body.position.set(0, 2, 0);
    isAlreadyDead = false;
    gameover.close();
    isDeathOpen = false;
    toggleCursorLock();
    document.getElementById("grayout").style.display = "none"
    spawn();
    updateHP(PLAYER);
    updateAmmo(PLAYER);
    updateWave();
  } else {
    console.log("NO PLAYER FOUND");
    clearEnemies();
    clearItems();
    spawn();
    build_inventory();
    giveItem(new small_ammo(30));
    giveItem(new small_ammo(150));
    giveItem(new energy_ammo(150));
    PLAYER.hp = 100;
    PLAYER.weapon = new Pea_Shooter();
    PLAYER.secondary = new Shotgun();
    updateAmmo(PLAYER);
    updateHP(PLAYER);
    update_inv_ui();
    PLAYER.body.position.set(0, 2, 0);
    isAlreadyDead = false;
    gameover.close();
    isDeathOpen = false;
    toggleCursorLock();
    document.getElementById("grayout").style.display = "none";
    updateWave();
  }
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
floorMesh.userData.physicsBody = floorBody;
// console.log(floorBody);
floorBody.collisionFilterGroup = 1;
floorBody.collisionFilterMask = -1;


// CREATE PLAYER BODY
let create_player_body = (player) => {
  let shape = new CANNON.Box(new CANNON.Vec3(1,2,1));
  let playerBody = new CANNON.Body({ shape: shape, mass: 50, fixedRotation: true });
  playerBody.position.set(0,14,0);
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

// let xLine = makeMesh(500, 0.2, 1, 0x700050);
// xLine.position.set(0,0,0);

// let yLine = makeMesh(1, 0.2, 500, 0x910000);
// yLine.position.set(0,0,0);


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
  // console.log(inv.childNodes)
  inv.childNodes.forEach((cell,i) => {
    if(PLAYER.inventory[i] != undefined && cell.childNodes.length<1) {

      let img = document.createElement("img");
      img.src = `https://sl-gaming.s3.amazonaws.com/inv-assets/${PLAYER.inventory[i].img}`;
      img.classList.add("item");
      img.ondragstart = () => false;


      let counter = document.createElement("div");
      counter.classList.add("counter");
      counter.textContent = PLAYER.inventory[i].count;

      let tooltip = document.createElement("div");
      tooltip.hidden = true;
      tooltip.textContent = PLAYER.inventory[i].text;
      tooltip.id = `tooltip-${i}`;
      tooltip.classList.add("tooltip");

      cell.appendChild(img);
      cell.appendChild(counter);
      cell.appendChild(tooltip);

      cell.onmouseover = (e) => { console.log("MOUSE OVER ", i); document.getElementById(`tooltip-${i}`).hidden=false; }
      cell.onmouseleave = (e) => { document.getElementById(`tooltip-${i}`).hidden=true; }

    } else if (PLAYER.inventory[i] != undefined && cell.childNodes.length>1) {
      cell.childNodes[1].textContent = PLAYER.inventory[i].count;
      cell.childNodes[0].src = `https://sl-gaming.s3.amazonaws.com/inv-assets/${PLAYER.inventory[i].img}`
    } else {
      if(cell.childNodes.length>0) {
        // console.log("REMOVING", i)
        // for(let i = 0; i < cell.childNodes.length; i++) { cell.removeChild(cell.childNodes[i]) }
        cell.removeChild(cell.childNodes[2])
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
    // console.log("EXIT POINTER LOCK")
  }
}

let item_log = [];
let showItemPickup = (item) => {
  let log = document.getElementById("item-pickup-log");
  let listItem = document.createElement("li");
  listItem.textContent = item.name;
  listItem.classList.add("item-pickup-label", item.rarity);
  let id = `item-pickup-log-${Date.now()}`;
  listItem.id = id;
  log.appendChild(listItem);

  setTimeout(() => {
    log.removeChild(listItem);
  },5000)
}


let giveItem = (item) => {
  if(item.isStack) {
    let didGive = false;
    for(let i = 0; i < PLAYER.inventory.length; i++) {
      if(!didGive && PLAYER.inventory[i] != undefined) {
        if(item.id == PLAYER.inventory[i].id) {
          PLAYER.inventory[i].count += item.count;
          showItemPickup(item);
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
          showItemPickup(item);
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
        showItemPickup(item);
        didGive = true;
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
  // console.log(PLAYER.inventory)
  updateInventory();
}
let inv_pickup = (event, id) => {
  inv_start = id;
}

let useItem = (e, i) => {
  let item = PLAYER.inventory[i];
  if(item.isConsumable) {
    item.use(PLAYER);
    PLAYER.inventory.splice(i,1,undefined);
    updateInventory();
    updateHP(PLAYER);
    updateAmmo(PLAYER);
  } else { console.log("item is not consumable") }
}

let build_inventory = () => {
  
  let inventory = new Array(40).fill(undefined);
  let element = document.getElementById("items-wrapper");
  inventory.forEach((item, i) => {
    let div = document.createElement("div");
    div.classList.add("inventory-cell", `cellid-${i}`);
    div.onmouseup = (e) => { inv_drop(e, i) };
    div.onmousedown = (e) => { inv_pickup(e, i) };
    div.ondblclick = (e) => { useItem(e, i) };
    element.appendChild(div);
  })
  PLAYER.inventory = inventory;
}

let test_ammo = new shotgun_ammo(30);
let test_pack = new Health_pack(1);
let test_pack1 = new Health_pack(1);
let test_pack12 = new Health_pack(1);
let test_pack123 = new Health_pack(1);

let test_energy = new energy_ammo(20);

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

dropItem(test_ammo, new CANNON.Vec3(2,13,-30))
dropItem(test_pack, new CANNON.Vec3(-2,13,-30))
dropItem(test_energy, new CANNON.Vec3(0,13,-28))
// dropItem(test_pack1, new CANNON.Vec3(-2,1,-28))
// dropItem(test_pack12, new CANNON.Vec3(-2,1,-26))
// dropItem(test_pack123, new CANNON.Vec3(-2,1,-24))




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

let damageEnemy = (enemy, damage) => {
  if(enemy.update_hp(damage)) {
    handleDrops(enemies[enemy.body.userData.id])
    removeEnemy(enemy.body.userData.id);
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



// __ __ __ __ __ __ __ __ __
// NEW SPAWN FUNCTION

let hasSpawned = false;
let spawn = () => {
  let thisWave = waves[wave];
  
  if(thisWave) {
    for(let i = 0; i < thisWave.enemies.length; i++) {
      console.log(thisWave.enemies[i]);
      let mesh = thisWave.enemies[i].mesh;
      let body = thisWave.enemies[i].body;

      body.addEventListener('collide', enemyCollision);

      scene.add(mesh);
      world.addBody(body);

      body.userData.id = `${wave}_${i}_${thisWave.enemies[i].class}`
      enemies[`${wave}_${i}_${thisWave.enemies[i].class}`] = thisWave.enemies[i];
    }
    hasSpawned = true;
  }
}



let removeEnemy = (id) => {
  bodiesToRemove.push(enemies[id].body);
  scene.remove(enemies[id].mesh);
  delete enemies[id];
}

let move_towards_player = (mesh, body, speed) => {
  let direction = new THREE.Vector3();
  camera.getWorldPosition(direction);
  direction.sub(mesh.position);

  // const speed = 6; // Adjust this value to control the speed
  const velocity = direction.clone().normalize().multiplyScalar(speed); // CHANGE TO 'SPEED'
  
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
    case "1":
      swap_weapons();
      break
    case "2":
      swap_weapons();
      break
    case "k":
      clearEnemies();
      break
    case "l":
      PLAYER.take_damage(75);
      updateHP(PLAYER);
      break
    case "p":
      printPlayerPosition();
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

let printPlayerPosition = () => {
  console.log("\nplayer's current location:");
  console.log(`x: ${PLAYER.body.position.x}`);
  console.log(`y: ${PLAYER.body.position.y}`);
  console.log(`z: ${PLAYER.body.position.z}`);
  console.log("-- -- -- -- -- -- --\n")
}




















let isReloading = false;
let reload = (player) => {
  if(!isReloading) {
    isReloading = true;
    setTimeout(() => {PLAYER.weapon.reload(player); isReloading=false; updateAmmo(PLAYER)}, player.weapon.reloadTime);
    animateReload();
  } else {}
}

let animateReload = () => {
  let start = Date.now();
  let time = PLAYER.weapon.reloadTime;
  let progress = document.getElementById("reload-loader");
  progress.style.display = "block";
  let id = setInterval(() => {
    // console.log(progress.value)
    if(Date.now() >= start + time) {
      progress.value = 0;
      progress.style.display = "none";
      clearInterval(id)
    } else {
      progress.value += 1;
    }
    
  },time/100)
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
    // console.log(progress.value)
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
    // console.log(projectiles)
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
    // CAMERA KICK WIP - - - - 
    var rotationMatrix = new THREE.Matrix4();
    rotationMatrix.makeRotationAxis(new THREE.Vector3(1, 0, 0), player.weapon.camera_kick);
    camera.applyMatrix4(rotationMatrix);
    cameraRotation.x += player.weapon.camera_kick;
    if(player.weapon.isHitScan) {
      // console.log("HITSCAN!");
      player.weapon.createProjectile(camera, world, scene, enemies, damageEnemy)
    } else {
      let p = player.weapon.createProjectile(camera);
      for(let i = 0; i < p.body.length; i++) {
        scene.add(p.mesh[i]);
        world.addBody(p.body[i]);
        projectiles.push({
          mesh: p.mesh[i],
          body: p.body[i],
          removeAfterMS: p.body[i].userData.removeAfterMS,
          createdAt: Date.now(),
          rules: p.rules ? p.rules : undefined,
          callback: p.callback ? p.callback : undefined
        });
      }
    }
  }
}

let update_projectiles = () => {
  for (let i = projectiles.length - 1; i >= 0; i--) {
    const projectile = projectiles[i];
    projectile.mesh.position.copy(projectile.body.position);
    if(projectile.rules) {
      if(projectile.rules.deltaSize) { // if given, change size of projectile every frame
        projectile.mesh.scale.add(new THREE.Vector3(projectile.rules.deltaSize,projectile.rules.deltaSize,projectile.rules.deltaSize));
        projectile.body.shapes[0] = new CANNON.Sphere(projectile.body.shapes[0].radius + (projectile.rules.deltaSize / 2));
        projectile.body.mass = projectile.body.mass + 0.6;
        // logProperties(projectile.body)
      }
      if(projectile.rules.deltaSpeed) {// if given, change speed of projectile every frame
        projectile.body.velocity.mult(projectile.rules.deltaSpeed, projectile.body.velocity);
      }
    }
    
    if(removeProjectile(projectile)) { // do after projectile is to be removed
      if(projectile.callback) { projectile.callback(projectile.mesh, projectile.body, enemies, world ,damageEnemy); console.log(enemies) }
      projectiles.splice(i, 1)
    } ;
  }
}

let logProperties = (object) => {
  console.log("\n-- -- -- -- -- -- -- --\nobject data");
  console.log(`object mass: ${object.mass}`);
  console.log(`shape size: ${object.shapes[0].radius}`);
  console.log(`object velocities: x-${object.velocity.x} y-${object.velocity.y} z-${object.velocity.z}`)
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
  // console.log(enemies)
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
    move_towards_player(enemies[key].mesh, enemies[key].body, enemies[key].moveSpeed)
    enemies[key].mesh.position.copy(enemies[key].body.position);
    enemies[key].mesh.quaternion.copy(enemies[key].body.quaternion);
  })

  if(Object.keys(enemies).length < 1 && hasSpawned) {
    wave += 1;
    hasSpawned = false;
    saveWave();
    updateWave();
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
  camera.position.y += 2.5 //+ 40;
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
