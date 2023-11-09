import * as THREE from 'three';
import * as CANNON from "cannon";

import makeAltar from '../helpers/makeAltar';

export default class Altar {
    constructor() {

        this.id = "altar"
        this.toBeDeleted = false;
        this.toBeWaved = true;
        [this.mesh, this.body, this.group] = makeAltar();

    }
}