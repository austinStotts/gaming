import * as THREE from 'three';
import * as CANNON from "cannon";

export default class Pea_Shooter {
    constructor() {
        this.projectileDMG = 5;
        this.magazineSize = 30;
        this.inMagazine = 0;
        // this.inReserve = 0;
        this.ammo_id = 'small_ammo';
        this.reloadTime = 800; // in milliseconds
        this.removeAfterMS = 5000; // in milliseconds
        this.projectile_speed = 250; // in milliseconds
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
        const material = new THREE.MeshBasicMaterial({ color: 0x000000 });
        const projectileMesh = new THREE.Mesh(geometry, material);
    
        const mass = 1; // Mass of the projectile
        const projectileShape = new CANNON.Sphere(0.5); // Radius of the sphere
        const projectileBody = new CANNON.Body({ mass, shape: projectileShape, collisionFilterGroup: 1, collisionFilterMask: -1 });
        projectileBody.userData = {physicsMesh: projectileMesh, collisionClass: "userProjectile", removeAfterMS: this.removeAfterMS}
        projectileBody.ccdSpeedThreshold = 100;  // Adjust the threshold as needed
        projectileBody.ccdIterations = 100;
        projectileMesh.position.copy(camera.position);
        projectileBody.position.copy(projectileMesh.position);
        const cameraDirection = new THREE.Vector3();
        camera.getWorldDirection(cameraDirection);
        const initialVelocity = new CANNON.Vec3(cameraDirection.x * this.projectile_speed, cameraDirection.y * this.projectile_speed, cameraDirection.z * this.projectile_speed); // Adjust the velocity as needed
        projectileBody.velocity.copy(initialVelocity);

        return { mesh: [projectileMesh], body: [projectileBody] }
    }
}