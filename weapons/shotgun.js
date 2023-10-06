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
    constructor(ammo=0, magazineSize=8) {
        this.projectileDMG = 4;
        this.magazineSize = magazineSize;
        this.inMagazine = magazineSize;
        this.inReserve = ammo - magazineSize;
        this.reloadTime = 1400; // in milliseconds
        this.spreadMultiplier = 0.05;
        this.removeAfterMS = 200; // in seconds
        this.projectile_speed = 300; // in milliseconds
    }

    reload () {
        if(this.inReserve >= this.magazineSize - this.inMagazine) { this.inReserve += this.inMagazine; this.inMagazine = this.magazineSize; this.inReserve -= this.magazineSize; }
        else { this.inReserve += this.inMagazine; this.inMagazine = this.inReserve; this.inReserve = 0; }
    }

    removeAmmo () {
        this.inMagazine -= 1;
    }

    createProjectile (camera) {
        let bodies = [];
        let meshes = [];

        for (let i=0; i<8; i++) {
            const geometry = new THREE.SphereGeometry(0.025, 32, 32);
            const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            const projectileMesh = new THREE.Mesh(geometry, material);
        
            const mass = 15; // Mass of the projectile
            const projectileShape = new CANNON.Sphere(0.25); // Radius of the sphere
            const projectileBody = new CANNON.Body({ mass, shape: projectileShape });
            projectileBody.userData = {physicsMesh: projectileMesh, collisionClass: "userProjectile", removeafterMS: this.removeAfterMS}
            projectileMesh.position.copy(camera.position);
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