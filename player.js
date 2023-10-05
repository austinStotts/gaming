import * as THREE from 'three';
import * as CANNON from "cannon";

import Pea_Shooter from "./weapons/pea_shooter";
import Shotgun from "./weapons/shotgun";

export default class Player {
    constructor(id) {
        this.id = id;
        this.hp = 100;
        this.armor = 0;
        this.speed = 10;
        this.acc = 0.25;
        this.dec = 0.2;
        this.groundHeight = 0.25;
        this.inventory = {};
        this.weapon = new Pea_Shooter(600);
        this.mesh;
        this.body;
    }



    change_weapon (weapon) {
        this.weapon = weapon;
    }

    set_body (body) {
        this.body = body;
    }

    // move_player (camera, d, s) {
    //     let x = new THREE.Vector3();
    //     x.copy(this.body.position);
    //     x.addScaledVector(d, s)
    //     console.log("\nPLAYER DIRECTION: ", x)
    //     this.body.position.copy(x)
    //     camera.position.copy(this.body.position);
    // }



    move_player (velocity) {
        // if(Math.abs(this.body.velocity.x) >= this.speed) { velocity.x = 0; }
        // if(Math.abs(this.body.velocity.z) >= this.speed) { velocity.z = 0; }

        velocity.mult(this.speed, this.body.velocity)

        // this.body.velocity.set(velocity.x + this.body.velocity.x, this.body.velocity.y, velocity.z + this.body.velocity.z)
        
    }

    take_damage (n) {
        this.hp = this.hp - n;
    }
} 