import * as THREE from 'three';
import * as CANNON from "cannon";

import small_ammo from "../items/small_ammo";
import shotgun_ammo from "../items/shotgun_ammo";

let makeBishop = (l) => {
    let geometry = new THREE.BoxGeometry(1, 3, 1);
    let material = new THREE.MeshStandardMaterial({ color: 0xf06292, wireframe: false, transparent: false });
    let mesh = new THREE.Mesh(geometry, material);

    let shape = new CANNON.Box(new CANNON.Vec3(0.75, 1.75, 0.75));
    let body = new CANNON.Body({ shape, mass: 10, angularVelocity: {x: 0, y: 0, z: 0}, angularDamping: 0.9, fixedRotation: true });

    body.collisionFilterGroup = 1;
    body.collisionFilterMask = -1; 
    body.userData = {physicsMesh: mesh, collisionClass: "enemy"};
    mesh.userData.physicsBody = body;

    body.position.set(l.x, l.y+0.25, l.z);
    mesh.position.copy(body.position);

    return [mesh, body];
}

export default class Bishop {
    constructor(location={x:0,y:0,z:0}) {
        this.class = "bishop";
        this.hp = 60;
        this.damage = 30;
        [this.mesh, this.body] = makeBishop(location);
        this.drop_table;
        this.moveSpeed = 6;
        this.projectileDMG = 10;
        this.projectile_speed = 60;
        this.removeAfterMS = 2000;
        this.fireTime = Date.now();

        this.buildDropTable()
    }

    buildDropTable () {
        this.drop_table = new Array(60).fill(undefined);
        for(let i = 0; i < 20; i++) { this.drop_table.push(new small_ammo(30)) }
        for(let i = 0; i < 20; i++) { this.drop_table.unshift(new shotgun_ammo(16)) }
    }

    update_hp (n) {
        this.hp = this.hp - n;
        if(this.hp > 0) { return false }
        else { return true }
    }

    createProjectile (start, target) {
        console.log("BISHOP FIRE")
        const geometry = new THREE.SphereGeometry(0.25, 32, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xb71c1c });
        const projectileMesh = new THREE.Mesh(geometry, material);
    
        const mass = 1; 
        const projectileShape = new CANNON.Sphere(1.25); 
        const projectileBody = new CANNON.Body({ mass, shape: projectileShape });
        projectileBody.userData = {physicsMesh: projectileMesh, collisionClass: "enemyProjectile", removeAfterMS: this.removeAfterMS}
        projectileBody.collisionFilterGroup = 1;
        projectileBody.collisionFilterMask = -1;

        projectileBody.position.set(start.x, start.y+3, start.z);
        projectileMesh.position.copy(projectileBody.position);

        // Calculate the direction from the projectile's position to the target position
        var direction = new CANNON.Vec3();
        target.vsub(projectileBody.position, direction);

        // Normalize the direction vector to get the unit vector
        direction.normalize();

        // Multiply the unit vector by the speed variable to get the initial velocity vector
        var initialVelocity = new CANNON.Vec3();
        direction.scale(this.projectile_speed, initialVelocity);

        // Set the initial velocity to the projectile's body
        projectileBody.velocity.copy(initialVelocity);


        // const initialVelocity = new CANNON.Vec3(target.x * this.projectile_speed, target.y * this.projectile_speed, target.z * this.projectile_speed); // Adjust the velocity as needed
        // projectileBody.velocity.copy(initialVelocity);

        // console.log(projectileBody);
        projectileBody.userData.damage = this.projectileDMG;
        return { mesh: [projectileMesh], body: [projectileBody] }
    }
}