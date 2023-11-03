import * as THREE from 'three';
import * as CANNON from "cannon";

import makeDoor from '../helpers/makeDoor';

export default class Door {
    constructor(width, height, islocked=false, rotate90=false, lock_id) {
        this.width = width;
        this.height = height;
        this.id = "key"
        this.lock_id = lock_id;
        this.islocked = islocked;
        this.rotate90 = rotate90;
        this.toBeDeleted = false;
        [this.mesh, this.body] = makeDoor(this.width, this.height, this.rotate90);

        this.unlock = this.unlock.bind(this);
    }

    unlock (player) {
        if(this.islocked) {
            for(let i = 0; i < player.inventory.length; i++) {
                if(player.inventory[i] != undefined) {
                    if(player.inventory[i].id == "key") {
                        if(player.inventory[i].lock_id == this.lock_id) {
                            player.inventory[i] = undefined;
                            this.toBeDeleted = true;
                            return true;
                        }
                    }
                }
            }
        } else {
            this.toBeDeleted = true;
            return true;
        }
        return false;
    }
}