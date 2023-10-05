import * as THREE from 'three';
import * as CANNON from "cannon";

export default class Pea_Shooter {
    constructor(ammo=0, magazineSize=30) {
        this.projectileDMG = 5;
        this.magazineSize = magazineSize;
        this.inMagazine = magazineSize;
        this.inReserve = ammo - magazineSize;
        this.reloadTime = 800; // in milliseconds
        this.removeAfterMS = 5; // in milliseconds
        this.projectile_speed = 200; // in milliseconds
    }

    reload () {
        if(this.inReserve >= this.magazineSize - this.inMagazine) { this.inReserve += this.inMagazine; this.inMagazine = this.magazineSize; this.inReserve -= this.magazineSize; }
        else { this.inReserve += this.inMagazine; this.inMagazine = this.inReserve; this.inReserve = 0; }
    }

    removeAmmo () {
        this.inMagazine -= 1;
    }

    createProjectile (camera) {
        const geometry = new THREE.SphereGeometry(0.1, 32, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const projectileMesh = new THREE.Mesh(geometry, material);
    
        const mass = 5; // Mass of the projectile
        const projectileShape = new CANNON.Sphere(0.2); // Radius of the sphere
        const projectileBody = new CANNON.Body({ mass, shape: projectileShape });
        projectileBody.userData = {physicsMesh: projectileMesh, collisionClass: "userProjectile", removeafterMS: this.removeAfterMS}
        projectileMesh.position.copy(camera.position);
        projectileBody.position.copy(projectileMesh.position);
        const cameraDirection = new THREE.Vector3();
        camera.getWorldDirection(cameraDirection);
        const initialVelocity = new CANNON.Vec3(cameraDirection.x * this.projectile_speed, cameraDirection.y * this.projectile_speed, cameraDirection.z * this.projectile_speed); // Adjust the velocity as needed
        projectileBody.velocity.copy(initialVelocity);

        return { mesh: [projectileMesh], body: [projectileBody] }
    }
}