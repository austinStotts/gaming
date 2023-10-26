import * as THREE from 'three';
import * as CANNON from "cannon";

import small_ammo from "../items/small_ammo";
import shotgun_ammo from "../items/shotgun_ammo";


let makeRook = (l) => {
    let geometry = new THREE.SphereGeometry(3);
    let material = new THREE.MeshBasicMaterial({ color: 0x005599 });
    let mesh = new THREE.Mesh(geometry, material);

    let bodyShape = new CANNON.Sphere(3);
    let body = new CANNON.Body({ shape: bodyShape, mass: 20 });

    body.collisionFilterGroup = 1;
    body.collisionFilterMask = -1;
    body.userData = {physicsMesh: mesh, collisionClass: "enemy"}
    mesh.userData.physicsBody = body;

    body.position.set(l.x, l.y, l.z);
    mesh.position.copy(body.position);

    return [mesh, body];
}

export default class Rook {
    constructor(location={x:0,y:0,z:0}) {
        this.class = "rook";
        this.hp = 80;
        this.damage = 25;
        [this.mesh, this.body] = makeRook(location);
        this.drop_table;
        this.moveSpeed = 8;

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