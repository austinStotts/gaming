import * as THREE from 'three';
import * as CANNON from "cannon";

import makeLantern from '../helpers/makeLantern';

export default class Lantern {
    constructor(color=0x857070, brightness=25, falloff=0.75) {
        this.id = "lantern"
        this.toBeDeleted = false;
        this.mesh = makeLantern(color, brightness, falloff);

    }
}