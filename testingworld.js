import * as THREE from 'three';
import * as CANNON from "cannon";
import { threeToCannon, ShapeType } from 'three-to-cannon';
// import { BloomEffect, EffectComposer, EffectPass, RenderPass } from "postprocessing";
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
import makeDoor from './helpers/makeDoor.js';
import makeAltar from './helpers/makeAltar.js';

import map_functions from "./map.js";
import waves from "./waves.js";

import Door from './constructs/door.js';
import Lantern from "./constructs/lantern.js";
import Stairs from './constructs/stairs.js';

import Health_pack from "./items/health_pack.js";
import small_ammo from './items/small_ammo.js';
import shotgun_ammo from './items/shotgun_ammo.js'
import energy_ammo from './items/energy_ammo.js';
import Pulse_Bomb from './weapons/pulse_bomb.js';
import Shotgun from './weapons/shotgun.js';
import Rifle from './weapons/rifle.js';
import Key from './items/key.js';
import Light_armor from "./armor/light_armor.js"
import Heavy_Armor from './armor/heavy_armor.js';
import Altar from './constructs/altar.js';
import Platform from './constructs/platform.js';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';



// HELLO!
// THIS IS A WORK IN PROGRESS
// TODAY IS 11/14/23 BUT I HAVE BEEN WORKING FOR A FEW MONTHS NOW
// 
// THINGS TO DO: || 1 - 5 || 1 BEING VERY IMPORTANT
// ---------------------------------
// .2. REFACTOR ENEMY SPAWNS TO USE A WORLD LOCATION AND NOT A PER WAVE LOCATION
//    - AS IN, ENEMIES ARE TIED TO THE WORLD AND ALL SPAWN AT ONCE - NOT IN A WAVE BY WAVE METHOD
// 
// .3. REFINE ENEMY BEHAVIORS AND ENHANCE LEVEL DESIGN
// .3. IN SAME - ENHANCE WORLD GENERATION TO MAKE INTERESTING LEVELS
//
// .1. AUTO DETECT WINDOW SIZE CHANGE AND UPDATE CAMERA/SCENE
//
// .2. ALLOW FOR WORLD EVENTS TO CHANGE ENVIRMENT INDEPENDANT OF LITERAL INTERACTIONS
//     - AS IN, ALLOW FOR THINGS TO HAPPEN WITHOUT INTERACTING DIRECLY WITH THE OBJECT BODY/MESH
//     - EX. KILLING A SPECIFIC ENEMY SPAWNS ANOTHER OR OPENS A DOOR
//     - THIS COULD BE ALL APART OF THE "WORLD" CLASS AND HAS BOOLS FOR DIFFERENT THINGS
//
//
//




// ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
// GLOBAL VARIABLES - needs cleanup
// camera / movement
let sensitivity = 0.0002; // CEMERA SENS ** ** **
let floor = 2;
// jumping
let isJumping = false;
let jumpStartTime = 0;
const jumpDuration = 600; // in milliseconds
const jumpHeight = 3;
const moveInterval = 200;
// PLAYER
let PLAYER = new Player('steve');
// ENEMIES
let bodiesToRemove = [];
let meshToRemove = [];
let enemies = {}
let wave = 1;
// let waves = [];
let currentWorld = 1;

let active_items = [];
let itemsToRemove = [];
let isTakingDamage = false;
let override = false;
let turnOffSpawn = true;
let worldBuildMode = false;
let spawnItems = true;
let buildWorld = false;



// ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
// FUNCTIONS FOR CHANGING GAME SETTING FROM CONSOLE



window.speed = (n=0.25) => {
  if(typeof n == "number") {
    PLAYER.speed = n;
    console.log(`
    speed updated to: ${n}
    default: 60
    `);
  } else { console.log("invalid speed value") }
}

window.sens = (n=0.0002) => {
  if(typeof n == "number") {
    sensitivity = n;
    console.log(`
    sensitivity updated to: ${n}
    default: 0.0002
    `);
  } else { console.log("invalid sensitivity value") }
}


let availableMethods = [window.speed, window.sens]
window.help = () => {
  console.log(`
  hello
  this is the developer console

  you can use this to interact with the game world in some interesting ways

  ${availableMethods.forEach(m => m)}
  `)
}


// window.position = (x, y, z) => {
//   if(typeof x == "number" && typeof y == "number" && typeof z == "number") {
//     camera.position.set(x, y, z)
//   }
// }

// ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
// HELPER FUNCTIONS FOR GAME UI

let applyBonuses = () => {
  let oldMaxHP = PLAYER.maxHP;
  let bonuses = PLAYER.armor.bonuses;
  let hp = 1;
  let damage = 1;
  let speed = 1;
  let jump = 1;
  bonuses.forEach(bonus => {
    if(bonus.hp_bonus) { hp += bonus.hp_bonus }
    if(bonus.damage_bonus) { damage += bonus.damage_bonus }
    if(bonus.speed_bonus) { speed += bonus.speed_bonus }
    if(bonus.jump_bonus) { jump += bonus.jump_bonus }
  })
  PLAYER.maxHP = (PLAYER.maxHP*hp);
  PLAYER.dmg_multiplier = (PLAYER.dmg_multiplier*damage);
  PLAYER.speed_multiplier = (PLAYER.speed_multiplier*speed);
  PLAYER.jump_multiplier = (PLAYER.jump_multiplier*jump);

  if(PLAYER.hp == oldMaxHP) { PLAYER.hp = PLAYER.maxHP }
  updateHP();
  console.log(PLAYER)
}


let updateHP = () => {
  let hp = document.getElementById("hp");
  let hpStat = document.getElementById("hp-stat-progress");
  let hpStatValue = document.getElementById("hp-stat-value");
  let shield = document.getElementById("shield");
  let shieldStat = document.getElementById("shield-stat-progress");
  let shieldStatValue = document.getElementById("shield-stat-value");
  if(PLAYER.armor) {
    shieldStat.value = PLAYER.armor.current_shield;
    shieldStatValue.innerText = PLAYER.armor.current_shield;
    shield.value = PLAYER.armor.current_shield;
  }

  hpStat.value = PLAYER.hp;
  hpStatValue.innerText = `${PLAYER.hp}/${PLAYER.maxHP}`;
  hp.value = PLAYER.hp;
}

let updateWave = () => {
  let w = document.getElementById("wave");
  w.textContent = wave;
}

let handleDMG = (enemy, player) => {
  PLAYER.take_damage(enemy.damage);
  updateHP(player);
  showDamage();
}

let getWeapon = (id) => {
  if(id == "pea_shooter") { return Pea_Shooter }
  else if(id == "shotgun") { return Shotgun }
}

let updatePlayerStats = () => {
  let pDMG = document.getElementById("dmg-modifier-value");
  let pSpeed = document.getElementById("speed-modifier-value");
  let pJump = document.getElementById("jump-modifier-value");

  pDMG.innerText = `${PLAYER.dmg_multiplier}`;
  pSpeed.innerText = `${PLAYER.speed_multiplier}`;
  pJump.innerText = `${PLAYER.jump_multiplier}`;
}

// ## ## ## ## ## ## ## ##
// INIT FUNCTION - RUNS ONCE AT START
let init = () => {
  scene.add(floorMesh);
  world.addBody(floorBody);
  create_player_body(PLAYER)
  build_inventory();
}

// ## ## ## ## ## ## ## ## ## ## ##
// RESET GAME WORLD
document.getElementById("try-again").addEventListener("click", () => { reset() })
let reset = () => {
  if(window.localStorage.getItem("player_data") != undefined) { // IF PROGRESS HAS BEEN SAVED ALREADY
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
  } else { // IF NO PROGRESS WAS SAVED - AKA RESET TO INIT VALUES
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




// ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
// ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
// ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
// INVENTORY

let updateInventory = () => {
  let inv = document.getElementById("items-wrapper");
  
  inv.childNodes.forEach((cell,i) => {
    if(PLAYER.inventory[i] != undefined && cell.childNodes.length<1) {
      // item img
      let img = document.createElement("img");
      img.src = `https://sl-gaming.s3.amazonaws.com/inv-assets/${PLAYER.inventory[i].img}`;
      img.classList.add("item");
      img.ondragstart = () => false;
      // item counter
      let counter = document.createElement("div");
      counter.classList.add("counter");
      counter.textContent = PLAYER.inventory[i].count;
      // tooltip on mouse over
      let tooltip = document.createElement("div");
      tooltip.hidden = true;
      tooltip.textContent = PLAYER.inventory[i].text;
      tooltip.id = `tooltip-${i}`;
      tooltip.classList.add("tooltip");
      // add elements to html
      cell.appendChild(img);
      cell.appendChild(counter);
      cell.appendChild(tooltip);
      cell.onmouseover = (e) => { document.getElementById(`tooltip-${i}`).hidden=false; }
      cell.onmouseleave = (e) => { document.getElementById(`tooltip-${i}`).hidden=true; }

    } else if (PLAYER.inventory[i] != undefined && cell.childNodes.length>1) {
      cell.childNodes[1].textContent = PLAYER.inventory[i].count;
      cell.childNodes[0].src = `https://sl-gaming.s3.amazonaws.com/inv-assets/${PLAYER.inventory[i].img}`
    } else {
      if(cell.childNodes.length>0) { // remove in backwards order
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
  updatePlayerStats();
  updateHP(PLAYER)
}

let toggleCursorLock = (force=false) => {
  if(force) {
    canvas.requestPointerLock = canvas.requestPointerLock || canvas.mozRequestPointerLock || canvas.webkitRequestPointerLock;
    canvas.requestPointerLock();
  } else {
    if(!isInventoryOpen && !isAlreadyDead) {
      canvas.requestPointerLock = canvas.requestPointerLock || canvas.mozRequestPointerLock || canvas.webkitRequestPointerLock;
      canvas.requestPointerLock();
    } else {
      document.exitPointerLock();
    }
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
}

let inv_start;
let inv_end;

let inv_drop = (event, id) => { 
  inv_end = id;
  [PLAYER.inventory[inv_start], PLAYER.inventory[inv_end]] = [PLAYER.inventory[inv_end], PLAYER.inventory[inv_start]];
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

// ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
// KEYBOARD CONTROLS
const keyboardState = {};
document.addEventListener('keydown', (event) => {
    keyboardState[event.key] = true;
});
document.addEventListener('keyup', (event) => {
    keyboardState[event.key] = false;
});

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
    //   reload(PLAYER);
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
    case " ":
      jump();
      break
    case "f":
      interact();
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
    case "o":
      override = !override;
      break
    case "j":
      toggleBuildMode();
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

let get_random = (n) => {
  if((Math.floor(Math.random() * 100)) % 2 == 0) {
    return (Math.random() * n) * -1;
  } else {
    return (Math.random() * n)
  }
}

// ## ## ## ## ## ## ## ## ## ## ## ## ##
// JUMPING
function jump() {
  if(!isJumping) {
    isJumping = true;
    jumpStartTime = Date.now();
    PLAYER.body.velocity.y = (10 * PLAYER.jump_multiplier);
  }
}



// ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
// MOUSE/CAMERA CONTROLS
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



// ## ## ## ## ## ## ## ##
// Scene
const scene = new THREE.Scene();
// ## ## ## ## ## ## ## ##
// CAMERA
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(2,5,0);
// ## ## ## ## ## ## ## ##
// Renderer
const renderer = new THREE.WebGLRenderer({
	powerPreference: "high-performance",
	// antialias: false,
	// stencil: false,
	// depth: false,
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.getContext().linewidth = 6;
document.body.appendChild(renderer.domElement);
renderer.domElement.id = "canvas"
// ## ## ## ## ## ## ## ##
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
world.defaultContactMaterial.friction = 0.05;
let solver = new CANNON.GSSolver();
solver.iterations = 7;
solver.tolerance = 0.1;
world.solver = new CANNON.SplitSolver(solver);
world.solver.iterations = 7;





















// | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |
//  | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |
// | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |
//  | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |


//                  ABOVE ARE CAMERA / MOVEMENT CONTROLS
//                THIS FILE IS FOR TESTING WORLD GENERATION



//           - FLOOR -
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
floorBody.collisionFilterGroup = 1;
floorBody.collisionFilterMask = -1;


//          CREATE PLAYER BODY
let create_player_body = (player) => {
  let shape = new CANNON.Box(new CANNON.Vec3(1,2,1));
  let playerMaterial = new CANNON.Material("playerMaterial");
  playerMaterial.friction = 0.0;
  playerMaterial.restitution = 0;
  let playerBody = new CANNON.Body({ shape: shape, mass: 50, fixedRotation: true });
  playerBody.material = playerMaterial;
  let l = map_functions.world_1.spawnLocation || [0,2,0];
  playerBody.position.set(l[0],l[1],l[2]);
  playerBody.collisionFilterGroup = 1;
  playerBody.collisionFilterMask = 1;
  playerBody.userData = {collisionClass: "player", id: `${player.id}`}
  playerBody.addEventListener("collide", playerCollision)
  player.set_body(playerBody)
  world.addBody(playerBody);
}

let playerCollision = (event) => {
  if(event.body.userData.collisionClass == "floor") { isJumping=false }
  else if(event.body.userData.collisionClass == "enemyProjectile" || event.target.userData.collisionClass == "enemyProjectile") {
    PLAYER.take_damage(event.body.userData.damage || event.target.userData.damage);
    showDamage();
    updateHP(PLAYER);
  }
}















// ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
// WORLD GEN


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

      let axis = new THREE.Vector3(0, 1, 0);
      rotateObject(mesh, axis, angle);
      world.addBody(body);
    }
  })
  scene.add(roomGroup);
}


let buildCeilings = (position, angle, options) => {
      // CEILINGS
      options.textureOveride = "../ceiling.jpg"
      let ceilingGroup = makeRoom(position, options);
      ceilingGroup.traverse((mesh) => {
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
    
          let axis = new THREE.Vector3(0, 1, 0);
          rotateObject(mesh, axis, angle);
          world.addBody(body);
        }
      })
      scene.add(ceilingGroup);
}

let constructs = [];

// 0        1            2         3
// class - class args - location - name
let buildConstructs = (construct) => {
  let con = new construct.class(...construct.args);
  if(construct.class == Stairs) {
    for(let i = 0; i < con.mesh.length; i++) {

      scene.add(con.mesh[i]);
      world.add(con.body[i]);
    }
    
  }
  else if(construct.class == Door) { 
    con.lock_id = construct.id;
    con.body.position.set(construct.location[0],construct.location[1],construct.location[2]);
    con.mesh.position.copy(con.body.position);
    con.body.userData.isInteractable = true;
    con.body.userData.name = construct.name;
    con.body.userData.construct_id = construct.id;
    world.addBody(con.body);
    scene.add(con.mesh);
  }
  else if(construct.class == Lantern) { 
    con.mesh.position.set(construct.location[0], construct.location[1], construct.location[2]);
    scene.add(con.mesh);
  } else if(construct.class == Altar) {
    console.log(con.mesh);
    con.group.position.set(construct.location[0],construct.location[1],construct.location[2]);
    con.group.children[0].position.y = 0.25;
    con.group.children[1].position.y = 1.5;
    con.group.children[2].position.y = 3.5;
    con.body.position.copy(con.group.position);
    // con.mesh.position.y = 3.5;

    scene.add(con.group);
    world.addBody(con.body);
  } else if(construct.class == Platform) {
    con.mesh.position.set(construct.location[0],construct.location[1],construct.location[2]);
    con.body.position.copy(con.mesh.position);
    scene.add(con.mesh);
    world.addBody(con.body)
  }
  else {
    con.body.position.set(construct.location[0],construct.location[1],construct.location[2]);
    con.mesh.position.copy(con.body.position);
    con.body.userData.isInteractable = true;
    con.body.userData.name = construct.name;
    con.body.userData.construct_id = construct.id;
    world.addBody(con.body);
  }
  

  constructs.push({construct_id: construct.id, object: con});
}





if(buildWorld) {
  map_functions.world_1.structures.forEach(args => { build(args[0], args[1], args[2]) });
  map_functions.world_1.ceilings.forEach(args => { buildCeilings(args[0], args[1], args[2]) });
  map_functions.world_1.constructs.forEach(args => { buildConstructs(args) });
} else {
  let superLamp = new Lantern(0xFFFFFF, 100, 1);
  superLamp.mesh.position.set(0,30,0)
  scene.add(superLamp.mesh);
}


// ## ## ## ## ## ## ## ## ## ## ## ##
// INTERACT WITH WORLD

let updateInteractUI = (show=false, value) => {
  let interactBox = document.getElementById("interact-wrapper");
  let key = document.getElementById("interact-key");
  let label = document.getElementById("interact-label");
  if(show) {
    interactBox.hidden = false;
    label.innerText = ` [${value.userData.physicsBody.userData.name}]`;
  } else {
    interactBox.hidden = true;
    label.innerText = "";
  }

}

let interactionMeshes = [];
let checkInteractable = () => {
  interactionMeshes.forEach((mesh, i) => {
    scene.remove(mesh.mesh);
    interactionMeshes.splice(i,1);
  })
  let cameraPosition = camera.position;
  let cameraDirection = new THREE.Vector3();
  camera.getWorldDirection(cameraDirection);
  let start = new CANNON.Vec3(cameraPosition.x, cameraPosition.y, cameraPosition.z);
  let raycast = new THREE.Raycaster(start, cameraDirection, 1.25, 10);
  let intersections = raycast.intersectObjects(scene.children);
  if(intersections.length > 0) {
    if(intersections[0].object.userData.isInteractable) {
      let time = Date.now();
      let edgeMesh = intersections[0].object.userData.edgeMesh;
      edgeMesh.userData.createdAt = time;
      interactionMeshes.push({mesh: edgeMesh, meshToTrack: intersections[0].object, createdAt: time})
      scene.add(edgeMesh);
      // console.log(edgeMesh)
      updateInteractUI(true, intersections[0].object)
    } else {
      updateInteractUI(false);
    }
  } else {
    updateInteractUI(false);
  }
}

setInterval(() => { checkInteractable() }, 100)

let interact = () => {
  let cameraPosition = camera.position;
  let cameraDirection = new THREE.Vector3();
  camera.getWorldDirection(cameraDirection);
  let start = new CANNON.Vec3(cameraPosition.x, cameraPosition.y, cameraPosition.z);
  let raycast = new THREE.Raycaster(start, cameraDirection, 1.25, 10);
  let intersections = raycast.intersectObjects(scene.children);
  for(let i = 0; i < intersections.length; i++) {
      if(intersections[i].object.isMesh) {
          let body = intersections[i].object.userData.physicsBody;
          if(body.userData.collisionClass == "weapon") {
            let weapon;
            for(let i = 0; i < active_items.length; i++) { if(active_items[i].createdAt == body.userData.timecode) { weapon = active_items[i].item }}
            giveWeapon(weapon);
          } else if(body.userData.collisionClass == "armor") {
            let armor;
            for(let i = 0; i < active_items.length; i++) { if(active_items[i].createdAt == body.userData.timecode) { armor = active_items[i].item }}
            giveArmor(armor);
          }
          else if(body.userData.collisionClass == "door") {
            for(let i = 0; i < constructs.length; i++) {
              if(constructs[i].construct_id == body.userData.construct_id) {
                if(constructs[i].object.unlock(PLAYER)) {
                  updateInventory();
                }
              }
            }
          }
      }
  }
}




let worldLight = new THREE.AmbientLight(0xFFFFFF, 10);
worldLight.position.set(0,50,0);

let toggleBuildMode = () => {
  worldBuildMode = !worldBuildMode;
  if(worldBuildMode) {
    scene.add(worldLight)
  } else {
    scene.remove(worldLight)
  }
}





// | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | 
//  | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | 
//   | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | 
//    | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | 
//     | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | \ | 
//                 NEW WOLRD GEN
//                USING IMPORTED MODELS



let roomLoader = new GLTFLoader();
roomLoader.load("./room v1.glb", (room) => {
  console.log(room)
  scene.add(room.scene);
  const result = threeToCannon(room.scene.children[0]);
  const {shape, offset, quaternion} = result;
  let roomBody = new CANNON.Body({ mass: 0 });
  // Add the shape to a CANNON.Body.
  roomBody.addShape(shape, offset, quaternion);
  roomBody.userData = {collisionClass: "floor"  };
  // roomBody.position.copy(room.scene.position);
  room.scene.position.copy(roomBody.position);
  world.addBody(roomBody)
});




















































// ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
// PROJECTILES
let canvas = document.getElementById("canvas");










// ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
// UTILITY FUNCTIONS
// add functionality of all sorts

let isDeathOpen = false;
let isAlreadyDead = false;
let gameover = document.getElementById("gameover");


canvas.onclick = (e) => {
  toggleCursorLock(true);
}

let printPlayerPosition = () => {
  console.log("\nplayer's current location:");
  console.log(`x: ${PLAYER.body.position.x}`);
  console.log(`y: ${PLAYER.body.position.y}`);
  console.log(`z: ${PLAYER.body.position.z}`);
  console.log("-- -- -- -- -- -- --\n")
}





let removeBodies = (body, i) => {
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








// ## ## ## ## ## ## ## ## ## ## ##
// UPDATE FUNCTIONS
// runs every frame to do all sorts of things

let updateGame = () => {
  // PLAYER.body.position.y += 0.004;
  playerMesh.position.copy(PLAYER.body.position);
  playerMesh.quaternion.copy(PLAYER.body.quaternion);

  camera.position.copy(PLAYER.body.position);
  camera.position.y += worldBuildMode==true ? 42.5 : 2.5;

  let playerGravity = new CANNON.Vec3(0, -500, 0);
  let gravityForce = new CANNON.Vec3();
  PLAYER.body.vectorToWorldFrame(playerGravity, gravityForce);
  PLAYER.body.applyForce(gravityForce, PLAYER.body.position);
}














let updateConstructs = () => {
  for(let i = 0; i < constructs.length; i++) {
    if(constructs[i].object.toBeDeleted) {
      scene.remove(constructs[i].object.mesh);
      world.remove(constructs[i].object.body);
    } else if (constructs[i].object.toBeWaved) {
      let v = 0.3 * Math.sin((2*Math.PI) * 15 * (Date.now()/50000) + 1);
      // console.log(v)
      constructs[i].object.mesh.position.y = 4 + v;
      constructs[i].object.mesh.children.forEach(child => {
        child.position.y = 3.9 + v;
      })
    }
  }
}

// create player wireframe
let playerGeometry = new THREE.BoxGeometry(2,4,2);
let playerMaterial = new THREE.MeshBasicMaterial({ color: 0xFE90C9, wireframe: true })
let playerMesh = new THREE.Mesh(playerGeometry,playerMaterial);
scene.add(playerMesh);

// ## ## ## ## ## ## ## ## ##
// POSTPROCESSING

// const composer = new EffectComposer(renderer);
// composer.addPass(new RenderPass(scene, camera));
// composer.addPass(new EffectPass(camera, new BloomEffect()));


// resize the renderer/camera when the window size changes
window.onresize = () => {
  // console.log("RERERERE RESIZE!!")
  renderer.setSize(window.innerWidth, window.innerHeight);
  // console.log(window.innerWidth / window.innerHeight)
  camera.aspect = (window.innerHeight/window.innerWidth);

}


// _________________________________________
// ||||||||||||||||||||||||||||||||||||||||
// Animation loop
const animate = () => {

  let rate = 1/60;
  world.step(rate, rate, 10);

  playerInputs();
  updateGame();
  updateConstructs();

  bodiesToRemove.forEach(removeBodies);
  meshToRemove.forEach(removeMesh);
    
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  // composer.render()
};



// add console.logs
setInterval(() => {
  // console.log("\nBODY POSITION Y: ", PLAYER.body.position.y);
  // console.log("FORCE:", PLAYER.body.force)
  // console.log("VELOCITY: ",PLAYER.body.velocity);
  // console.log("\nCAMERA", camera.position.y);
  // console.log("FLOOR: ", floorBody.position);
  // console.log(camera);
  // console.log(scene)
  // console.log(world)
}, 10000);

init();
animate();
