import * as THREE from 'three';
import * as CANNON from "cannon";

export default class Rifle {
    constructor(inMagazine=0) {
        this.display_name = "Rifle"
        this.id = "rifle";
        this.isHitScan = true;
        this.projectileDMG = 15;
        this.magazineSize = 20;
        this.inMagazine = inMagazine;
        // this.inReserve = 0;
        this.ammo_id = 'energy_ammo';
        this.reloadTime = 1000; // in milliseconds
        // this.removeAfterMS = 3000; // in milliseconds
        // this.projectile_speed = 100; // in milliseconds
        this.swap_time = 600;
        this.camera_kick = 0.01;
        this.text = "is heavier than it looks"
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

    createProjectile (camera, world, scene, enemies, damageEnemy) {
        console.log(scene.children)
        var cameraPosition = camera.position; // Position of the camera
        var cameraDirection = new THREE.Vector3(); // Direction vector of the camera
        camera.getWorldDirection(cameraDirection);
        var start = new CANNON.Vec3(cameraPosition.x, cameraPosition.y, cameraPosition.z);

        var vector = new THREE.Vector3();
        vector.setFromMatrixPosition(camera.matrixWorld); // Get the position of the camera in the world
        vector.add(new THREE.Vector3().setFromMatrixColumn(camera.matrix, 0).multiplyScalar(0.5));
        vector.add(new THREE.Vector3().setFromMatrixColumn(camera.matrix, 1).multiplyScalar(-0.25));
        vector.add(new THREE.Vector3().setFromMatrixColumn(camera.matrix, 2).multiplyScalar(0));

        var rayGeometry = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(vector.x, vector.y, vector.z),
            new THREE.Vector3((Math.random() * -0.025 ) + (vector.x + cameraDirection.x), (Math.random() * 0.025 ) + (vector.y + cameraDirection.y), (Math.random() * -0.025 ) + (vector.z + cameraDirection.z))
        ]);
        var rayMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
        var rayVisual = new THREE.Line(rayGeometry, rayMaterial);
        scene.add(rayVisual);
        setTimeout(() => {scene.remove(rayVisual)}, 50)
        

        var raycast = new THREE.Raycaster(start, cameraDirection, 0.25, 500);
        let intersections = raycast.intersectObjects(scene.children);
        for(let i = 0; i < intersections.length; i++) {
            if(intersections[i].object.isMesh) {
                let body = intersections[i].object.userData.physicsBody;
                if(body.userData.collisionClass == "enemy") {
                damageEnemy(enemies[body.userData.id], 15)
                }
            }
        }
    }
}