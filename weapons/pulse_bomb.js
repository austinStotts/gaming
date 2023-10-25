import * as THREE from 'three';
import * as CANNON from "cannon";

export default class Pulse_Bomb {
    constructor(inMagazine=0) {
        this.display_name = "Pulse Bomb"
        this.id = "pea_shooterpulse_bomb";
        this.projectileDMG = 100;
        this.magazineSize = 2;
        this.inMagazine = inMagazine;
        // this.inReserve = 0;
        this.ammo_id = 'energy_ammo';
        this.reloadTime = 2400; // in milliseconds
        this.removeAfterMS = 3000; // in milliseconds
        this.projectile_speed = 20; // in milliseconds
        this.speedScalar = 1.25;
        this.sizeScalar = 0.035;
        this.swap_time = 1600;
        this.camera_kick = 0.005;

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
        const geometry = new THREE.SphereGeometry(1, 32, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xFFFF1E });
        const projectileMesh = new THREE.Mesh(geometry, material);
    
        const mass = 500; // Mass of the projectile
        const projectileShape = new CANNON.Sphere(2.25); // Radius of the sphere
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
        // projectileMesh.position.
        // projectileMesh.position.x += 0.5;
        projectileBody.position.copy(projectileMesh.position);
        const cameraDirection = new THREE.Vector3();
        camera.getWorldDirection(cameraDirection);
        const initialVelocity = new CANNON.Vec3(cameraDirection.x * this.projectile_speed, cameraDirection.y * this.projectile_speed, cameraDirection.z * this.projectile_speed); // Adjust the velocity as needed
        projectileBody.velocity.copy(initialVelocity);
        // projectileBody.velocity.scale()


        return { mesh: [projectileMesh], body: [projectileBody], rules: { deltaSpeed: this.speedScalar, deltaSize: this.sizeScalar } }
    }
}