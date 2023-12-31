import * as THREE from 'three';
import * as CANNON from "cannon";

import small_ammo from "../items/small_ammo";
import shotgun_ammo from "../items/shotgun_ammo";

let makePawn = (l) => {
    let geometry = new THREE.BoxGeometry(2, 2, 2);
    let material = new THREE.MeshStandardMaterial({ color: 0x674EA7, wireframe: false, transparent: false });
    let mesh = new THREE.Mesh(geometry, material);

    let shape = new CANNON.Box(new CANNON.Vec3(1.25, 1.25, 1.25));
    let body = new CANNON.Body({ shape, mass: 1, angularVelocity: {x: 0, y: 0, z: 0}, angularDamping: 0.01 });

    body.collisionFilterGroup = 1;
    body.collisionFilterMask = -1; 
    body.userData = {physicsMesh: mesh, collisionClass: "enemy"};
    mesh.userData.physicsBody = body;

    body.position.set(l.x, l.y, l.z);
    mesh.position.copy(body.position);

    return [mesh, body];
}

export default class Pawn {
    constructor(location={x:0,y:0,z:0}) {
        this.class = "pawn";
        this.hp = 30;
        this.damage = 15;
        [this.mesh, this.body] = makePawn(location);
        this.drop_table;
        this.moveSpeed = 6;

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
}