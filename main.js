import * as THREE from 'three';
import * as CANNON from "cannon";
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
import light_armor from "./armor/light_armor.js"




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

let active_items = [];
let itemsToRemove = [];
let isTakingDamage = false;
let override = false;
let turnOffSpawn = false;




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






// ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
// WEAPON MODEL SCENE CREATION
// CREATE ONCE!!!!
let w1_model = document.getElementById("weapon-one-model");
const w1_scene = new THREE.Scene();
const w1_camera = new THREE.PerspectiveCamera(75, 160 / 30, 0.1, 1000);
const w1_renderer = new THREE.WebGLRenderer();
w1_renderer.setSize(160, 30);
w1_model.appendChild(w1_renderer.domElement);
w1_renderer.domElement.id = "w1_canvas";
let textMesh;
function w1_animate() {
  requestAnimationFrame(w1_animate);
  if(textMesh) {
    textMesh.rotation.x += 0.01;
  }
  w1_renderer.render(w1_scene, w1_camera);
}
w1_animate();

// WEAPON 2!
let w2_model = document.getElementById("weapon-two-model");
const w2_scene = new THREE.Scene();
const w2_camera = new THREE.PerspectiveCamera(75, 160 / 30, 0.1, 1000);
const w2_renderer = new THREE.WebGLRenderer();
w2_renderer.setSize(160, 30);
w2_model.appendChild(w2_renderer.domElement);
w2_renderer.domElement.id = "w2_canvas"
let textMesh2;
function w2_animate() {
  requestAnimationFrame(w2_animate);
  if(textMesh2) {
    textMesh2.rotation.x += 0.0075;
  }
  w2_renderer.render(w2_scene, w2_camera);
}
w2_animate();

// ^ above is creating the 2 scenes for weapons
//   below is updating the models

// * * * * * MODEL UPDATE FUNCTION
let update_inv_ui = () => {
  let w1_label = document.getElementById("weapon-one-label");
  // WEAPON ONE MODEL
  if(PLAYER.weapon != undefined) {
    w1_scene.children.forEach(child => {
      w1_scene.remove(child);
    })
    w1_label.textContent = PLAYER.weapon.display_name;
    let w1_tooltip = `
    <div id="w1-tooltip-wrapper" hidden>
      <div class="damage-label-tooltip">dmg:<span class="dmg-value">${PLAYER.weapon.projectileDMG}</span></div>
      <div class="reload-time">reload:<span class="reload-value">${PLAYER.weapon.reloadTime/1000}s</span></div>
      <div class="ammo-type">ammo:<span class="${PLAYER.weapon.ammo_name}">${PLAYER.weapon.ammo_name}</span></div>
      <div id="w1-tooltip" class="w1-tooltip">${PLAYER.weapon.text}</div>
    </div>`;
    w1_model.insertAdjacentHTML( 'beforeend', w1_tooltip );
    w1_model.onmouseover = (e) => { document.getElementById(`w1-tooltip-wrapper`).hidden=false; }
    w1_model.onmouseleave = (e) => { document.getElementById(`w1-tooltip-wrapper`).hidden=true; }

    let textGeometry;
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
      const textMaterial = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
      textMesh = new THREE.Mesh(textGeometry, textMaterial);
      textMesh.position.set(40,-10,40);
      textMesh.rotation.y = (-Math.PI / 2) *2;
      w1_scene.add(textMesh);
      w1_camera.position.z = 0;
      w1_camera.lookAt(0,0,2)
    })
  }
  
  // WEAPON TWO MODEL
  let w2_label = document.getElementById("weapon-two-label");
  if(PLAYER.secondary != undefined) {
    w2_scene.children.forEach(child => {
      w2_scene.remove(child);
    })
    w2_label.textContent = PLAYER.secondary.display_name;
    let w2_tooltip = `
    <div id="w2-tooltip-wrapper" hidden>
      <div class="damage-label-tooltip">dmg:<span class="dmg-value">${PLAYER.secondary.projectileDMG}</span></div>
      <div class="reload-time">reload:<span class="reload-value">${PLAYER.secondary.reloadTime/1000}s</span></div>
      <div class="ammo-type">ammo:<span class="${PLAYER.secondary.ammo_name}">${PLAYER.secondary.ammo_name}</span></div>
      <div id="w2-tooltip" class="w2-tooltip">${PLAYER.secondary.text}</div>
    </div>`;
    w2_model.insertAdjacentHTML( 'beforeend', w2_tooltip );
    w2_model.onmouseover = (e) => { document.getElementById(`w2-tooltip-wrapper`).hidden=false; }
    w2_model.onmouseleave = (e) => { document.getElementById(`w2-tooltip-wrapper`).hidden=true; }

    let textGeometry2;
    let f2 = "./fonts/helvetiker_bold.typeface.json"
    let loader2 = new FontLoader()
    loader2.load(f2, (font) => {
      textGeometry2 = new TextGeometry(PLAYER.secondary.display_name, {
        font: font,
        size: 30,
        height: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 1,
        bevelSize: 0.5,
        bevelSegments: 3
      });
      const textMaterial = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
      textMesh2 = new THREE.Mesh(textGeometry2, textMaterial);
      textMesh2.position.set(40,-10,40);
      textMesh2.rotation.y = (-Math.PI / 2) *2;
      w2_scene.add(textMesh2);
      w2_camera.position.z = 0;
      w2_camera.lookAt(0,0,2)
    })
  } else {
    w2_label.innerText = "none"
  }
}

// ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
//   *  *  *  *  *  *  *  *  *  *  *  *  *  *







// ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
// HELPER FUNCTIONS FOR GAME UI

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
  hpStatValue.innerText = PLAYER.hp;
  hp.value = PLAYER.hp;
}

let updateWave = () => {
  let w = document.getElementById("wave");
  w.textContent = wave;
}

let handleDMG = (enemy, player) => {
  player.take_damage(enemy.damage);
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
  spawn();
  build_inventory();
  giveItem(new small_ammo(60));
  // giveItem(new small_ammo(150));
  // giveItem(new energy_ammo(150));
  // giveItem(new shotgun_ammo(150));
  updateAmmo(PLAYER);
  updateHP(PLAYER);
  update_inv_ui();
  updateWave();
  
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
// ## ## ## ## ## ## ## ##
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
floorBody.collisionFilterGroup = 1;
floorBody.collisionFilterMask = -1;
// ## ## ## ## ## ## ## ##
// CREATE PLAYER BODY
let create_player_body = (player) => {
  let shape = new CANNON.Box(new CANNON.Vec3(1,2,1));
  let playerMaterial = new CANNON.Material("playerMaterial");
  playerMaterial.friction = 0.0;
  playerMaterial.restitution = 0;
  let playerBody = new CANNON.Body({ shape: shape, mass: 50, fixedRotation: true });
  playerBody.material = playerMaterial;
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
  else if(event.body.userData.collisionClass == "enemyProjectile" || event.target.userData.collisionClass == "enemyProjectile") {
    PLAYER.take_damage(event.body.userData.damage || event.target.userData.damage);
    showDamage();
    updateHP(PLAYER);
  }
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

let test_ammo = new small_ammo(30);
let test_pack = new Health_pack(1);
let energyammo = new energy_ammo(120);
let pb = new Pulse_Bomb();
let rfl = new Rifle();

let shotgunammo = new shotgun_ammo(24);
let test_energy = new energy_ammo(20);

let shotgun = new Shotgun();
let lightArmor = new light_armor();

let giveWeapon = (weapon) => {
  if(PLAYER.weapon == undefined) {
    PLAYER.weapon = weapon;
    weapon.toBeDeleted = true;
  } else if(PLAYER.secondary == undefined) {
    PLAYER.secondary = weapon;
    weapon.toBeDeleted = true;
  } else {
    dropItem(PLAYER.weapon, PLAYER.body.position);
    PLAYER.weapon = weapon;
    weapon.toBeDeleted = true;
  }

  weapon.toBeDeleted = true;
  update_inv_ui();
  updateAmmo(PLAYER);
  updateInventory();
}

let giveArmor = (armor) => {
  if(PLAYER.armor == undefined) {
    PLAYER.armor = armor;
    armor.toBeDeleted = true;
  } else {
    dropItem(PLAYER.armor, PLAYER.body.position);
    PLAYER.armor = armor;
    armor.toBeDeleted = true;
  }

  armor.toBeDeleted = true;
  update_inv_ui();
  updateAmmo(PLAYER);
  updateInventory();
}

let dropItem = (item, position) => { // put item at any location
  let time = Date.now();
  item.body.position.set(position.x, position.y, position.z)
  if(item.body.userData.collisionClass == "item") {
    item.body.addEventListener('collide', (event) => {
      if(event.body.userData.collisionClass == "player" && !item.body.userData.hasBeenCollected) {
        item.body.userData.hasBeenCollected = true;
        giveItem(item);
        item.toBeDeleted = true;
      }
    })
  } else {
    item.toBeDeleted = false;
    item.body.userData.timecode = time;
  }

  active_items.push({item, createdAt: time})
  world.addBody(item.body);
  scene.add(item.mesh);
}

dropItem(test_ammo, new CANNON.Vec3(2,13,-30))
dropItem(test_pack, new CANNON.Vec3(-2,13,-30))
dropItem(shotgunammo, new CANNON.Vec3(-77,13,26))
dropItem(new Key('0001', "key to the storage room"), new CANNON.Vec3(0, 13, 10))

// dropItem(shotgun, new CANNON.Vec3(-77, 13, 37))
dropItem(shotgun, new CANNON.Vec3(-77,13,36));
dropItem(lightArmor, new CANNON.Vec3(0, 13, 14))


// dropItem(rfl, new CANNON.Vec3(2,1,2))
// dropItem(pb, new CANNON.Vec3(4,1,4))
// dropItem(energyammo, new CANNON.Vec3(0,1,0))

// dropItem(test_pack1, new CANNON.Vec3(-2,1,-28))
// dropItem(test_pack12, new CANNON.Vec3(-2,1,-26))
// dropItem(test_pack123, new CANNON.Vec3(-2,1,-24))


// ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
// WORLD GEN

// const light = new THREE.AmbientLight( 0x404040, 25 ); // soft white light
// light.position.set(0,14,-7)
// scene.add( light );

// var l1 = new THREE.PointLight(0x707070, 25, 100, 0.5);
// l1.position.set(0, 30, -45);
// scene.add(l1);
// var l2 = new THREE.PointLight(0x707070, 25, 100, 0.5);
// l2.position.set(0, 30, 35);
// scene.add(l2);
// var l3 = new THREE.PointLight(0x707070, 10, 100, 0.5);
// l3.position.set(-90, 30, 30);
// scene.add(l3);
// var l4 = new THREE.PointLight(0x707070, 10, 100, 0.5);
// l4.position.set(-8, 24, -39);
// scene.add(l4);

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
  } else {
    con.body.position.set(construct.location[0],construct.location[1],construct.location[2]);
    con.mesh.position.copy(con.body.position);
    con.body.userData.isInteractable = true;
    con.body.userData.name = construct.name;
    con.body.userData.construct_id = construct.id;
    world.addBody(con.body);
  }
  

  constructs.push({construct_id: construct.id, object: con});
  
}


map_functions.world_1.structures.forEach(args => { build(args[0], args[1], args[2]) });
map_functions.world_1.ceilings.forEach(args => { buildCeilings(args[0], args[1], args[2]) });
map_functions.world_1.constructs.forEach(args => { buildConstructs(args) });













// ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
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

let hasSpawned = false;
let spawn = () => {
  if(!turnOffSpawn) {
    let thisWave = waves[wave];
    
    if(thisWave != undefined) {
      for(let i = 0; i < thisWave.enemies.length; i++) {
        let mesh = thisWave.enemies[i].mesh;
        let body = thisWave.enemies[i].body;
        body.addEventListener('collide', enemyCollision);
        scene.add(mesh);
        world.addBody(body);
        body.userData.id = `${wave}_${i}_${thisWave.enemies[i].class}`
        enemies[`${wave}_${i}_${thisWave.enemies[i].class}`] = thisWave.enemies[i];
      }
    } else {
      turnOffSpawn = true;
    }
    hasSpawned = true;
  }
  // hasSpawned = false;
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
  const velocity = direction.clone().normalize().multiplyScalar(override ? 0 : speed); // CHANGE TO 'SPEED'
  body.velocity.set(velocity.x, -1, velocity.z);
}

let checkBishopFire = (time) => {
  if(Date.now() - time > 3000) {
    return true
  } else{ return false }
}

let moveBishop = (bishop) => {
  let result = new CANNON.RaycastResult();
  world.rayTest(PLAYER.body.position, bishop.body.position, result);
  if(result.distance < 20) {
    bishop.fireTime = Date.now();
    let direction = new THREE.Vector3();
    camera.getWorldPosition(direction);
    direction.sub(bishop.mesh.position);
    const velocity = direction.clone().normalize().multiplyScalar(override ? 0 : -bishop.moveSpeed - 3); // CHANGE TO 'SPEED'
    bishop.body.velocity.set(velocity.x, -1, velocity.z);
  } else if(result.distance > 100) {
    // out of range, do nothing
  } else if(result.distance > 40) {
    bishop.fireTime = Date.now();
    let direction = new THREE.Vector3();
    camera.getWorldPosition(direction);
    direction.sub(bishop.mesh.position);
    const velocity = direction.clone().normalize().multiplyScalar(override ? 0 : bishop.moveSpeed); // CHANGE TO 'SPEED'
    bishop.body.velocity.set(velocity.x, -1, velocity.z);
  } else {
    if(checkBishopFire(bishop.fireTime)) {
      createProjectile(bishop);
      bishop.fireTime = Date.now();
    }
  }

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



// ## ## ## ## ## ## ## ## ## ## ## ##
// RELOAD AND SWAP WEAPONS

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
}

let animateSwap = () => {
  let start = Date.now();
  let time = PLAYER.secondary.swap_time;
  let progress = document.getElementById("weapon-loader");
  progress.style.display = "block";
  let id = setInterval(() => {
    if(Date.now() >= start + time) {
      progress.value = 0;
      progress.style.display = "none";
      clearInterval(id)
    } else {
      progress.value += 1;
    }
  },time/100)
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






// ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ##
// PROJECTILES
let canvas = document.getElementById("canvas");
let removeProjectile = (projectile) => {
  let deleteAt = projectile.createdAt + projectile.removeAfterMS;
  if(deleteAt < Date.now()) { 
    world.remove(projectile.body);
    scene.remove(projectile.mesh);
    return true
  } else { return false }
}

// is called to create every projectile regarless of weapon
// Actual projectile is make in weapon class
let projectiles = [];
function createProjectile(player) {
  if(player.class == "bishop") {
    let p = player.createProjectile(player.body.position, PLAYER.body.position);
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
  } else {
  if(player.weapon.inMagazine > 0 && !isReloading && !isInventoryOpen && !isSwappingWeapons && !isAlreadyDead) {
    player.weapon.removeAmmo(player);
    updateAmmo(player);
    // CAMERA KICK WIP - - - - 
    cameraRotation.x += player.weapon.camera_kick;
    camera.rotateX(player.weapon.camera_kick)
    if(player.weapon.isHitScan) {
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
  }}
}

// Is acalled every frame to move projectiles
let update_projectiles = () => {
  for (let i = projectiles.length - 1; i >= 0; i--) {
    const projectile = projectiles[i];
    projectile.mesh.position.copy(projectile.body.position);
    if(projectile.rules) {
      if(projectile.rules.deltaSize) { // if given, change size of projectile every frame
        projectile.mesh.scale.add(new THREE.Vector3(projectile.rules.deltaSize,projectile.rules.deltaSize,projectile.rules.deltaSize));
        projectile.body.shapes[0] = new CANNON.Sphere(projectile.body.shapes[0].radius + (projectile.rules.deltaSize / 2));
        projectile.body.mass = projectile.body.mass + 0.6;
      }
      if(projectile.rules.deltaSpeed) {// if given, change speed of projectile every frame
        projectile.body.velocity.mult(projectile.rules.deltaSpeed, projectile.body.velocity);
      }
    }
    if(removeProjectile(projectile)) { // do after projectile is to be removed
      if(projectile.callback) { projectile.callback(projectile.mesh, projectile.body, enemies, world ,damageEnemy); }
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

// handle mouse clicks and holds for projectiles
let isMouseHeldDown = false;
let moveTimer;
function startContinuousMove() {
  moveTimer = setInterval(() => {
    if (isMouseHeldDown) {
      createProjectile(PLAYER)
    }
  }, moveInterval);
}

function stopContinuousMove() {
  clearInterval(moveTimer);
}

canvas.addEventListener('mousedown', () => {
  isMouseHeldDown = true;
  startContinuousMove();
});

canvas.addEventListener('mouseup', () => {
  isMouseHeldDown = false;
  stopContinuousMove();
});

document.addEventListener('click', () => {createProjectile(PLAYER)});







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

let removeItems = (item, i) => {
  world.remove(item.body);
  scene.remove(item.mesh);
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

let saveWave = () => {
  window.localStorage.setItem("player_data", JSON.stringify({
    hp: PLAYER.hp,
    inventory: PLAYER.inventory,
    weapon: PLAYER.weapon,
    secondary: PLAYER.secondary,
    wave: wave
  }))
}

let animateWaveChange = () => {
  let waveLabel = document.getElementById("wave-wrapper");
  waveLabel.classList.add("shrink");
  setTimeout(() => {
    updateWave();
    waveLabel.classList.remove("shrink");
    waveLabel.classList.add("grow");
  }, 1500)
}


// ## ## ## ## ## ## ## ## ## ## ##
// UPDATE FUNCTIONS
// runs every frame to do all sorts of things

let updateGame = () => {
  PLAYER.body.position.y += 0.004;
  playerMesh.position.copy(PLAYER.body.position);
  playerMesh.quaternion.copy(PLAYER.body.quaternion);

  camera.position.copy(PLAYER.body.position);
  camera.position.y += 2.5 //+ 40;

  let playerGravity = new CANNON.Vec3(0, -500, 0);
  let gravityForce = new CANNON.Vec3();
  PLAYER.body.vectorToWorldFrame(playerGravity, gravityForce);
  PLAYER.body.applyForce(gravityForce, PLAYER.body.position);
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

  interactionMeshes.forEach((mesh, i) => {
    mesh.mesh.position.copy(mesh.meshToTrack.position);
    mesh.mesh.rotation.copy(mesh.meshToTrack.rotation)
  })
}

let updateEnemyPhysics = () => {
  Object.keys(enemies).forEach((key) => {
    if(enemies[key].class == "bishop") {
      moveBishop(enemies[key])
    } else {
      move_towards_player(enemies[key].mesh, enemies[key].body, enemies[key].moveSpeed)
    }
    
    enemies[key].mesh.position.copy(enemies[key].body.position);
    enemies[key].mesh.quaternion.copy(enemies[key].body.quaternion);
  })

  if(Object.keys(enemies).length < 1 && hasSpawned) {
    wave += 1;
    hasSpawned = false;
    if(waves[wave].modifier) {
      turnOffSpawn = true;
    }
    saveWave();
    animateWaveChange();
    setTimeout(() => {
      
      spawn();
    }, 5000)
  }
}

let showDamage = () => {
  let damage = document.getElementById("damage");
  damage.classList.add("damage");
  damage.hidden = false;
  setTimeout(() => {
    damage.classList.remove("damage");
    damage.hidden = true;
  }, 500);
}

let keepBishopsUpright = () => {
  Object.keys(enemies).forEach((key) => {
    if(enemies[key].class == "bishop") {
      const forceMagnitude = 2000; 

      const currentUp = new CANNON.Vec3(0, 1, 0); 
      const worldUp = enemies[key].body.quaternion.vmult(currentUp); 
      const antiRotationForce = worldUp.scale(-forceMagnitude); 
      enemies[key].body.applyForce(antiRotationForce, enemies[key].body.position)
    }
  })
}



let updateConstructs = () => {
  for(let i = 0; i < constructs.length; i++) {
    if(constructs[i].object.toBeDeleted) {
      scene.remove(constructs[i].object.mesh);
      world.remove(constructs[i].object.body);
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
  // keepBishopsUpright();
  updateConstructs();

  bodiesToRemove.forEach(removeBodies);
  meshToRemove.forEach(removeMesh);
    
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  // composer.render()
};

setInterval(() => {
  updateHP();
}, 150)

// add console.logs
setInterval(() => {
  // console.log("\nBODY POSITION Y: ", PLAYER.body.position.y);
  // console.log("FORCE:", PLAYER.body.force)
  // console.log("VELOCITY: ",PLAYER.body.velocity);
  // console.log("\nCAMERA", camera.position.y);
  // console.log("FLOOR: ", floorBody.position);
}, 3000);

init();
animate();
