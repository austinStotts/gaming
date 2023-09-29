import * as THREE from 'three';
import * as CANNON from "cannon";
import make_cube from "./cube.js";
import show_crosshair from "./crosshair.js";
import Player from './player.js';


let timeStep=1/60;
// camera / movement
let sensitivity = 0.0002; // CEMERA SENS ** ** **
let speed = 0.25; // PLAYER MOVE SPEED ** ** **
const air_speed = 0.2;
let floor = 2;
// jumping
let isJumping = false;
let jumpStartTime = 0;
const jumpDuration = 600; // in milliseconds
const jumpHeight = 3;
// Projectiles
let proj_speed = 200;
let proj_time = 5;
const moveInterval = 150; // Interval in milliseconds
// PLAYER
let steve = new Player(60, 30);
let reloadTime = 800;



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


  mag.textContent = player.inMagazine;
  reserve.textContent = player.inReserve;
}




// Scene
const scene = new THREE.Scene();

// CAMERA ** ** **
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0,5,2);
camera.lookAt(0,5,0);


// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.domElement.id = "canvas"

// CANNON SETUP
let world = new CANNON.World();
world.gravity.set(0,-10,0);
world.broadphase = new CANNON.NaiveBroadphase();
world.solver.iterations = 10;


// FLOOR
const floorGeometry = new THREE.PlaneGeometry(1000, 1000); // Adjust the size as needed
const floorMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, side: THREE.DoubleSide, wireframe: false }); //
const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
floorMesh.rotation.x = -Math.PI / 2; // Rotate the floor to be horizontal
floorMesh.position.y = 0;
scene.add(floorMesh);
const floorShape = new CANNON.Plane(); // Create a plane shape for the floor
const floorBody = new CANNON.Body({ mass: 100, shape: floorShape }); // Make the floor immovable (mass = 0)
floorBody.userData = {physicsMesh: floorMesh, collisionClass: "floor"}
// floorBody.addEventListener('collide', (e) => {console.log(e); console.log("FLOOR HIT")})
world.addBody(floorBody);

updateAmmo(steve);



let zero = make_cube(1,50, 1, 0x53D996);
zero.position.set(0,0,0)
scene.add(zero)

let x = make_cube(500, 0.2, 1, 0x910000);
x.position.set(0,0,0);
scene.add(x)

let y = make_cube(1, 0.2, 500, 0x910000);
y.position.set(0,0,0);
scene.add(y)

let get_random = (n) => {
  if((Math.floor(Math.random() * 100)) % 2 == 0) {
    return (Math.random() * n) * -1;
  } else {
    return (Math.random() * n)
  }
}


//______________________________________
// CHASE CUBES

let make_body = () => {
  let shape = new CANNON.Box(new CANNON.Vec3(2, 2, 2));
  let mass = 10;
  let body = new CANNON.Body({ mass });
  body.addShape(shape);
  body.angularVelocity.set(1, 0, 1);
  body.angularDamping = 0.01;
  body.position.set(get_random(100), 1, get_random(100));
  return body;
}

let cubes = [];
let bodies = [];
let bodiesToRemove = [];
let meshToRemove = [];

for(let i = 0; i < 20; i++) {
  let b = make_body();
  let c = make_cube(2, 2, 2, 0x674EA7, false);
  // c.position.set(Math.random() * 100, 1, Math.random() * 100);
  // c.position.copy(b.position)
  // c.quaternion.copy(b.quaternion)
  // console.log(b)
  b.add
  b.addEventListener('collide', (e) => {
    // console.log(e)
    if(e.body.userData.collisionClass != "userProjectile") {

    } else {
      bodiesToRemove.push(e.target)
      scene.remove(e.target.userData.physicsMesh)
      // meshToRemove.push(e.target.userData.mesh)
    }

  })
  // add mesh and body to the scene and world
  scene.add(c);
  world.addBody(b);
  // add mesh and body to each other for ref
  c.userData.physicsBody  = b;
  b.userData = {physicsMesh: c, collisionClass: "chaseBox"}
  // console.log(b)
  // add mesh and body to the array for objects for each
  cubes.push(c);
  bodies.push(b);
  
}



// let c = make_cube(2, 2, 2, 0x674EA7, true);
// let body = make_body();
// // c.position.set(10, 2, 10);
// scene.add(c)
// world.addBody(body)

let move_towards_player = (mesh, body) => {
  let direction = new THREE.Vector3();
  camera.getWorldPosition(direction);
  direction.sub(mesh.position);

  const speed = 5; // Adjust this value to control the speed
  const velocity = direction.clone().normalize().multiplyScalar(speed);
  
  // Apply the velocity to the Cannon.js body
  body.velocity.set(velocity.x, velocity.y, velocity.z);
}

let updatePhysics = () => {
  // console.log(bodies)
  
  for(let i=0; i < cubes.length; i++) {
    move_towards_player(cubes[i], bodies[i])
    cubes[i].position.copy(bodies[i].position)
    cubes[i].quaternion.copy(bodies[i].quaternion);
    // console.log(bodies[i])
  }

  // c.position.copy(body.position);
  // c.quaternion.copy(body.quaternion);
}


// _________________________________________
// add and update crasshair location
let crosshairGroup = show_crosshair();
// scene.add(crosshairGroup) // using html/css crosshair
let updateCrosshairPosition = () => {
    // Get the camera's position and rotation
    const cameraPosition = new THREE.Vector3();
    const cameraRotation = new THREE.Euler();

    camera.getWorldPosition(cameraPosition);
    cameraRotation.copy(camera.rotation);

    // Set the cube's position in front of the camera
    const distance = 1.4; // Adjust the distance from the camera
    const offset = new THREE.Vector3(0, 0, -distance).applyEuler(cameraRotation);
    crosshairGroup.position.copy(cameraPosition).add(offset);

    // Set the cube's rotation to match the camera's rotation
    crosshairGroup.rotation.copy(cameraRotation);
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
    
    if (keyboardState['ArrowUp'] || keyboardState['w']) {
        // Move forward
        camera.position.addScaledVector(direction, speed);
    }
    if (keyboardState['ArrowDown'] || keyboardState['s']) {
        // Move backward
        camera.position.addScaledVector(direction, -speed);
    }
    if (keyboardState['ArrowLeft'] || keyboardState['a']) {
        // Move left
        const leftDirection = new THREE.Vector3(-1, 0, 0);
        leftDirection.applyQuaternion(camera.quaternion);
        camera.position.addScaledVector(leftDirection, speed);
    }
    if (keyboardState['ArrowRight'] || keyboardState['d']) {
        // Move right
        const rightDirection = new THREE.Vector3(1, 0, 0);
        rightDirection.applyQuaternion(camera.quaternion);
        camera.position.addScaledVector(rightDirection, speed);
    }
    if (keyboardState['r']) {
      reload(steve);
    }
    if(camera.position.y < floor) { camera.position.y = floor }
    
}

let isReloading = false;

let reload = (player) => {
  // console.log("RELOADING")
  if(!isReloading) {
    isReloading = true;
    setTimeout(() => {player.reload(); isReloading=false; updateAmmo(steve)}, reloadTime);
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

// Define the jump function
function jump() {
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

let projectiles = [];

function createProjectile(position, camera, removeAfterSeconds, player) {
  if(player.inMagazine > 0 && !isReloading) {
    player.removeAmmo()
    updateAmmo(player)
    const geometry = new THREE.SphereGeometry(0.1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const projectileMesh = new THREE.Mesh(geometry, material);
    scene.add(projectileMesh);

    const mass = 0.1; // Mass of the projectile
    const projectileShape = new CANNON.Sphere(0.1); // Radius of the sphere
    const projectileBody = new CANNON.Body({ mass, shape: projectileShape });
    projectileBody.userData = {physicsMesh: projectileMesh, collisionClass: "userProjectile"}
    world.addBody(projectileBody);

    // Set initial position of the projectile
    projectileMesh.position.copy(position);
    projectileBody.position.copy(projectileMesh.position);

    // Calculate initial velocity towards camera direction
    const cameraDirection = new THREE.Vector3();
    camera.getWorldDirection(cameraDirection);
    const initialVelocity = new CANNON.Vec3(cameraDirection.x * proj_speed, cameraDirection.y * proj_speed, cameraDirection.z * proj_speed); // Adjust the velocity as needed
    projectileBody.velocity.copy(initialVelocity);

    // Remove the projectile after a certain number of seconds
    let elapsedTime = 0;
    const removeInterval = setInterval(() => {
        elapsedTime += 1 / 60; // Assuming a 60Hz frame rate
        if (elapsedTime >= removeAfterSeconds) {
            // Remove the projectile from the scene and world
            scene.remove(projectileMesh);
            world.remove(projectileBody);
            clearInterval(removeInterval); // Stop the interval
        }
    }, 1000 / 60); // Run every frame

    projectiles.push({
      mesh: projectileMesh,
      body: projectileBody,
      removeAfterSeconds: removeAfterSeconds
    });
  } else {
  
  }

}

let update_projectiles = () => {
  for (let i = projectiles.length - 1; i >= 0; i--) {
    const projectile = projectiles[i];

    // Update the Three.js mesh position based on the Cannon.js body
    projectile.mesh.position.copy(projectile.body.position);

    // Check if it's time to remove the projectile
    projectile.removeAfterSeconds -= 1 / 60;
    if (projectile.removeAfterSeconds <= 0) {
        // Remove the projectile from the scene and world
        scene.remove(projectile.mesh);
        world.remove(projectile.body);
        projectiles.splice(i, 1); // Remove from the array
    }
  }
}



document.addEventListener('click', () => {createProjectile(camera.position, camera, proj_time, steve)});


let isMouseHeldDown = false;
let moveTimer;

// Function to start moving the object forward at intervals
function startContinuousMove() {
  moveTimer = setInterval(() => {
    if (isMouseHeldDown) {
      createProjectile(camera.position, camera, proj_time, steve)
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



// _________________________________________
// ||||||||||||||||||||||||||||||||||||||||
// Animation loop
const animate = () => {

  world.step(1/60);
  update_projectiles()
  updatePhysics();
  playerInputs();
  bodiesToRemove.forEach(removeBodies);
  meshToRemove.forEach(removeMesh);
    
    // handleJumpAnimation();
    
    // console.log(isLookingAt(camera, zero, scene))
    // if(isLookingAt(camera, zero, scene)) { zero.material.color.set(0x000000) }
    // else { zero.material.color.set(0x6600ff) }

    // updateCrosshairPosition();

    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

animate();