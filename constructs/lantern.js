import * as THREE from 'three';
import * as CANNON from "cannon";

import makeLantern from '../helpers/makeLantern';

export default class Lantern {
    constructor() {
        this.id = "lantern"
        this.toBeDeleted = false;
        this.mesh = makeLantern();

    }
}