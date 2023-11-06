import * as THREE from 'three';
import * as CANNON from "cannon";

import Pawn from "./enemies/pawn";
import Rook from "./enemies/rook";
import Bishop from './enemies/bishop';





let location = (a) => {
    return {x: a[0], y:a[1], z:a[2]};
}

class Wave {
    constructor (n, enemies, modifier) {
        this.number = n;
        this.enemies = enemies;
        this.modifier = modifier;
    }
}

export default [
    undefined,
    new Wave(1, [new Pawn(location([-9,13,-40])), new Pawn(location([9,13,-40]))]),
    new Wave(2, [new Pawn(location([-47,13,-5])), new Pawn(location([0,13,25])), new Pawn(location([-45,13,62]))]),
    new Wave(3, [new Rook(location([-45,13,62])), new Pawn(location([-9,13,-40])), new Pawn(location([9,13,-40])), new Rook(location([0,13,25]))]),
    new Wave(4, [], true, "a sacrifice must be made")
];