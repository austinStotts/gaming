import * as THREE from 'three';
import * as CANNON from "cannon";

let get_random = (n) => {
    if((Math.floor(Math.random() * 100)) % 2 == 0) {
        return (Math.random() * n) * -1;
    } else {
        return (Math.random() * n)
    }
}

export default class Shotgun {
    constructor(inMagazine=0) {
        this.display_name = "Shotgun"
        this.projectileDMG = 4;
        this.magazineSize = 8;
        this.inMagazine = inMagazine;
        this.isHitScan = false;
        // this.inReserve = ammo - magazineSize;
        this.ammo_id = "shotgun_ammo";
        this.id = "shotgun";
        this.reloadTime = 1400; // in milliseconds
        this.spreadMultiplier = 0.000000005;
        this.removeAfterMS = 200; // in seconds
        this.projectile_speed = 150; // in milliseconds
        this.swap_time = 800;
        this.camera_kick = 0.15;
        this.number_of_pelets = 8;
        this.text = "very epic and very dangerous"
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

    removeAmmo () {
        this.inMagazine -= 1;
    }

    createProjectile (camera) {
        let bodies = [];
        let meshes = [];

        for (let i=0; i<this.number_of_pelets; i++) {
            const geometry = new THREE.SphereGeometry(0.025, 32, 32);
            const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            const projectileMesh = new THREE.Mesh(geometry, material);
        
            const mass = 15; // Mass of the projectile
            const projectileShape = new CANNON.Sphere(0.75); // Radius of the sphere
            const projectileBody = new CANNON.Body({ mass, shape: projectileShape });
            projectileBody.collisionFilterGroup = 2;
            projectileBody.collisionFilterMask = -1;
            projectileBody.userData = {physicsMesh: projectileMesh, collisionClass: "userProjectile", removeAfterMS: this.removeAfterMS}
            
            var vector = new THREE.Vector3();
            vector.setFromMatrixPosition(camera.matrixWorld); // Get the position of the camera in the world
            vector.add(new THREE.Vector3().setFromMatrixColumn(camera.matrix, 0).multiplyScalar(0.5));
            vector.add(new THREE.Vector3().setFromMatrixColumn(camera.matrix, 1).multiplyScalar(-0.25));
            vector.add(new THREE.Vector3().setFromMatrixColumn(camera.matrix, 2).multiplyScalar(0));
    
            projectileMesh.position.copy(vector);
            
            // projectileMesh.position.copy(camera.position);
            projectileBody.position.copy(projectileMesh.position);
            const cameraDirection = new THREE.Vector3();
            camera.getWorldDirection(cameraDirection);
            const initialVelocity = new CANNON.Vec3((cameraDirection.x + get_random(this.spreadMultiplier)) * this.projectile_speed, (cameraDirection.y + get_random(this.spreadMultiplier)) * this.projectile_speed, (cameraDirection.z + get_random(this.spreadMultiplier)) * this.projectile_speed); // Adjust the velocity as needed
            projectileBody.velocity.copy(initialVelocity);

            meshes.push(projectileMesh);
            bodies.push(projectileBody);
        }

        return { mesh: meshes, body: bodies }
    }
}