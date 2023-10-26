import * as THREE from 'three';
import * as CANNON from "cannon";

import Pea_Shooter from "./weapons/pea_shooter";
import Shotgun from "./weapons/shotgun";
import Pulse_Bomb from './weapons/pulse_bomb';
import Rifle from "./weapons/rifle";

export default class Player {
    constructor(id) {
        this.id = id;
        this.hp = 100;
        this.armor = 0;
        this.speed = 60;
        this.acc = 0.25;
        this.dec = 0.2;
        this.groundHeight = 0.25;
        this.inventory = [];
        this.weapon = new Rifle;
        this.secondary = new Shotgun();
        this.mesh;
        this.body;
    }



    change_weapon (weapon) {
        this.weapon = weapon;
    }

    set_body (body) {
        this.body = body;
    }




    move_player (velocity) {
        let captureY = this.body.velocity.y;
        velocity.mult(this.speed, this.body.velocity);
        this.body.velocity.y = captureY;
    }

    take_damage (n) {
        this.hp = this.hp - n;
    }
} 