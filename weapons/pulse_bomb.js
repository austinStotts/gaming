import * as THREE from 'three';
import * as CANNON from "cannon";

export default class Pulse_Bomb {
    constructor(inMagazine=0) {
        this.display_name = "Pulse Bomb"
        this.id = "pulse_bomb";
        this.projectileDMG = 30;
        this.magazineSize = 2;
        this.isHitScan = false;
        this.inMagazine = inMagazine;
        // this.inReserve = 0;
        this.ammo_id = 'energy_ammo';
        this.reloadTime = 2400; // in milliseconds
        this.removeAfterMS = 3000; // in milliseconds
        this.projectile_speed = 5; // in milliseconds
        this.speedScalar = 1.03;
        this.sizeScalar = 0.075;
        this.swap_time = 1600;
        this.camera_kick = 0.005;
        this.text = "looks heavier than it is"
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
        const geometry = new THREE.SphereGeometry(0.5, 32, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xFFFF1E });
        const projectileMesh = new THREE.Mesh(geometry, material);
    
        const mass = 75; // Mass of the projectile
        const projectileShape = new CANNON.Sphere(1.25); // Radius of the sphere
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


        return { mesh: [projectileMesh], body: [projectileBody], rules: { deltaSpeed: this.speedScalar, deltaSize: this.sizeScalar }, callback: (mesh, body, enemies, world, damageEnemy) => {
            const rayFrom = new CANNON.Vec3(body.position.x, body.position.y, body.position.z); // Position of the source object
            const result = new CANNON.RaycastResult();
            const distanceLimit = 50; // 10 meters radius

            // let enemiesHit = [];

            Object.keys(enemies).forEach(object => {
                console.log(enemies[object].body)
                const to = new CANNON.Vec3(enemies[object].body.position.x, enemies[object].body.position.y, enemies[object].body.position.z); // Position of the target enemies[object].body
                const direction = to.vsub(rayFrom);
                const ray = new CANNON.Ray(rayFrom, direction);
            
                // Cast the ray and check for intersection with enemies[object].bodys
                world.rayTest(rayFrom, to, result);
            
                if (result.hasHit && result.distance < distanceLimit) {
                    // Check if the hit enemies[object].body is the target enemies[object].body or a blocking obstacle
                    if (result.body.id === enemies[object].body.id) {
                        damageEnemy(enemies[object], 200)
                        return true; // enemies[Object].body is within the line of sight and distance limit
                    }
                }
                return false;
            });
        } }
    }
}