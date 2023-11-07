import * as THREE from 'three';
import * as CANNON from "cannon";

let makeWeapon = () => {
    let geometry = new THREE.BoxGeometry(1, 1, 3);
    let material = new THREE.MeshBasicMaterial({ color: 0x03fc39, wireframe: false, transparent: false });
    let mesh = new THREE.Mesh(geometry, material);
    let edgeGeo = new THREE.EdgesGeometry(geometry);
    let edgeMat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, wireframe: false, transparent: false }); 
    let edgeMesh = new THREE.Mesh(edgeGeo, edgeMat);
    edgeMesh.scale.add(0.25)
    mesh.userData.edgeMesh = edgeMesh;
    mesh.userData.isInteractable = true;

    let shape = new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 1.5));
    let body = new CANNON.Body({ shape, mass: 10, angularVelocity: {x: 0, y: 0, z: 0}, angularDamping: 0.01, linearDamping: 0.5 });

    body.collisionFilterGroup = 3;
    body.collisionFilterMask = -1; 
    body.userData = {collisionClass: "weapon"};
    mesh.userData.physicsBody = body;

    // body.position.set(l.x, l.y, l.z);
    // mesh.position.copy(body.position);

    return [mesh, body];
}

export default class Pea_Shooter {
    constructor(inMagazine=0) {
        this.display_name = "Pea Shooter"
        this.id = "pea_shooter";
        this.projectileDMG = 5;
        this.magazineSize = 30;
        this.isHitScan = false;
        this.inMagazine = inMagazine;
        // this.inReserve = 0;
        this.ammo_id = 'small_ammo';
        this.ammo_name = "small ammo";
        this.reloadTime = 800; // in milliseconds
        this.removeAfterMS = 3000; // in milliseconds
        this.projectile_speed = 100; // in milliseconds
        this.swap_time = 400;
        this.camera_kick = 0.005;
        this.text = "might literally shoot peas";
        [this.mesh, this.body] = makeWeapon();
        this.body.userData.name = this.display_name;
    }

    reload (player) {
        let ammo_count;
        let didFindAmmo = false;
        let atIndex;
        for(let i = 0; i < player.inventory.length; i++) {
            if(player.inventory[i] != undefined) {
                if(player.inventory[i].id == this.ammo_id) {
                    ammo_count = player.inventory[i].count;
                    didFindAmmo = true;
                    atIndex = i;
                }
            }
        }
        if(didFindAmmo) {
            if(ammo_count >= this.magazineSize - this.inMagazine) { ammo_count += this.inMagazine; this.inMagazine = this.magazineSize; ammo_count -= this.magazineSize; }
            else { ammo_count += this.inMagazine; this.inMagazine = ammo_count; ammo_count = 0; }
            player.inventory[atIndex].count = ammo_count;
        } else { console.log("no ammo found") }

    }

    removeAmmo (player) {
        this.inMagazine -= 1;
    }

    createProjectile (camera) {
        const geometry = new THREE.SphereGeometry(0.1, 32, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
        const projectileMesh = new THREE.Mesh(geometry, material);
    
        const mass = 1; // Mass of the projectile
        const projectileShape = new CANNON.Sphere(1.25); // Radius of the sphere
        // projectileShape.collisionMargin = 0.05;
        const projectileBody = new CANNON.Body({ mass, shape: projectileShape });
        projectileBody.userData = {physicsMesh: projectileMesh, collisionClass: "userProjectile", removeAfterMS: this.removeAfterMS}
        projectileBody.collisionFilterGroup = 2;
        projectileBody.collisionFilterMask = -1;

        var vector = new THREE.Vector3();
        vector.setFromMatrixPosition(camera.matrixWorld); // Get the position of the camera in the world
        vector.add(new THREE.Vector3().setFromMatrixColumn(camera.matrix, 0).multiplyScalar(0.5));
        vector.add(new THREE.Vector3().setFromMatrixColumn(camera.matrix, 1).multiplyScalar(-0.25));
        vector.add(new THREE.Vector3().setFromMatrixColumn(camera.matrix, 2).multiplyScalar(0));

        projectileMesh.position.copy(vector);
        projectileBody.position.copy(projectileMesh.position);
        const cameraDirection = new THREE.Vector3();
        camera.getWorldDirection(cameraDirection);
        const initialVelocity = new CANNON.Vec3(cameraDirection.x * this.projectile_speed, cameraDirection.y * this.projectile_speed, cameraDirection.z * this.projectile_speed); // Adjust the velocity as needed
        projectileBody.velocity.copy(initialVelocity);

        return { mesh: [projectileMesh], body: [projectileBody] }
    }
}