import * as THREE from 'three';
import * as CANNON from "cannon";

import makePlatform from '../helpers/makePlatform';

export default class Platform {
    constructor(width, height, depth) {
        this.width = width;
        this.height = height;
        this.depth = depth;
        this.id = "key"
        this.toBeDeleted = false;
        [this.mesh, this.body] = makePlatform(this.width, this.height, this.depth);
    }
}