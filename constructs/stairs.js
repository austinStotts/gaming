import * as THREE from 'three';
import * as CANNON from "cannon";

import makeRamp from '../helpers/makeRamp';

export default class Stairs {
    constructor(width=10, height=12, angle=0, position=new CANNON.Vec3(0,0,0)) {
        this.id = "stairs"
        this.toBeDeleted = false;
        [this.mesh, this.body] = makeRamp(width, height, angle, position);

    }
}