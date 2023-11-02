import * as THREE from 'three';

import Door from "./constructs/door";
import Lantern from './constructs/lantern';

let makeWallObject = (a) => {
    return {
        leftwall: a[0] ? true : false,
        rightwall: a[1] ? true : false,
        backwall: a[2] ? true : false,
        frontwall: a[3] ? true : false,
        floor: a[4] ? true : false,
    }
}

export default {
    world_1:{
        world: 1,
        structures:[
            [new THREE.Vector3(0,12,10), (Math.PI / 2)*2, {w: 20, h: 12, d: 30, color: 0x595151, walls: makeWallObject([1,1,1,0,1])}],
            [new THREE.Vector3(0,12,-10), 0, {w: 20, h: 12, d: 10, color: 0x00FF00, walls: makeWallObject([0,0,0,0,1])}],
            [new THREE.Vector3(0,12,0), 0, {w: 20, h: 12, d: 30, color: 0x595151, walls: makeWallObject([1,1,1,0,1])}],
            [new THREE.Vector3(-5,12,10), (Math.PI / 2), {w: 10, h: 12, d: 30, color: 0x595151, walls: makeWallObject([1,1,0,0,1])}],
            [new THREE.Vector3(5,12,10), (Math.PI / 2)*3, {w: 10, h: 12, d: 30, color: 0x595151, walls: makeWallObject([1,1,0,0,1])}],
            [new THREE.Vector3(-5,12,39.9), (Math.PI / 2), {w: 10, h: 12, d: 10, color: 0x595151, walls: makeWallObject([1,0,1,0,1])}],
            [new THREE.Vector3(45,12,-30), (Math.PI / 2)*2, {w: 10, h: 12, d: 30, color: 0x595151, walls: makeWallObject([1,1,0,0,1])}],
            [new THREE.Vector3(45,12,-65), (Math.PI / 2)*2, {w: 10, h: 12, d: 30, color: 0x595151, walls: makeWallObject([1,1,0,0,1])}],
            [new THREE.Vector3(45,12,-35), (Math.PI / 2)*2, {w: 10, h: 12, d: 5, color: 0x595151, walls: makeWallObject([1,0,0,0,1])}],
            [new THREE.Vector3(32.5,12,50), (Math.PI / 2), {w: 20, h: 12, d: 30, color: 0x595151, walls: makeWallObject([1,1,1,0,1])}],
            [new THREE.Vector3(45,12,-90), (Math.PI / 2)*2, {w: 10, h: 12, d: 25, color: 0x595151, walls: makeWallObject([1,1,0,0,1])}],
            [new THREE.Vector3(0,0,-150), (Math.PI / 2)*2, {w: 100, h: 24, d: 60, color: 0x595151, walls: makeWallObject([1,1,0,0,1])}],
            [new THREE.Vector3(0,0,-150), (Math.PI / 2)*2, {w: 100, h: 24, d: 0, color: 0x595151, walls: makeWallObject([0,0,1,0,1])}],
            [new THREE.Vector3(0,0,-90), (Math.PI / 2)*2, {w: 100, h: 12, d: 0, color: 0x595151, walls: makeWallObject([0,0,1,0,1])}],
            [new THREE.Vector3(0,11,-90), (Math.PI / 2)*2, {w: 80, h: 13, d: 0, color: 0x595151, walls: makeWallObject([0,0,1,0,0])}],
        ],
        ceilings: [
            [new THREE.Vector3(0,24,-40), 0, {w: 20, h: 12, d: 70, color: 0x595151, walls: makeWallObject([0,0,0,0,1])}],
            [new THREE.Vector3(22.5,24,-10), 0, {w: 35, h: 12, d: 10, color: 0x595151, walls: makeWallObject([0,0,0,0,1])}],
            [new THREE.Vector3(-30,24,-10), 0, {w: 40, h: 12, d: 10, color: 0x595151, walls: makeWallObject([0,0,0,0,1])}],
            [new THREE.Vector3(-45,24,0), 0, {w: 10, h: 12, d: 90, color: 0x595151, walls: makeWallObject([0,0,0,0,1])}],
            [new THREE.Vector3(-65,24,20), 0, {w: 30, h: 12, d: 25, color: 0x595151, walls: makeWallObject([0,0,0,0,1])}],
            [new THREE.Vector3(0,24,90), 0, {w: 100, h: 12, d: 60, color: 0x595151, walls: makeWallObject([0,0,0,0,1])}],

        ],
        constructs: [
            {class: Door, args: [5, 12, "0001", true, false], location: [-49.95, 18, 32.5], name: "locked door" },
            {class: Door, args: [10, 12, "0002", false, true], location: [-45, 18, 90], name: "door - open at own risk" },
            {class: Door, args: [10, 12, "0003", true, false], location: [35, 18, -5], name: "locked door" },
            {class: Lantern, args: [null, null, "lantern"], location: [-8, 23, 29], name: "lantern"},
            {class: Lantern, args: [null, null, "lantern"], location: [8, 23, 29], name: "lantern"},
            {class: Lantern, args: [null, null, "lantern"], location: [-8, 23, -39], name: "lantern"},
            {class: Lantern, args: [null, null, "lantern"], location: [8, 23, -39], name: "lantern"},
        ]
    }
}

// export default [
//     [new THREE.Vector3(0,0,10), (Math.PI / 2)*2, {w: 20, h: 12, d: 30, color: 0x595151, walls: makeWallObject([1,1,1,0,1])}],
//     [new THREE.Vector3(0,0,-10), 0, {w: 20, h: 12, d: 10, color: 0x00FF00, walls: makeWallObject([0,0,0,0,1])}],
//     [new THREE.Vector3(0,0,0), 0, {w: 20, h: 12, d: 30, color: 0x595151, walls: makeWallObject([1,1,1,0,1])}],
//     [new THREE.Vector3(-5,0,10), (Math.PI / 2), {w: 10, h: 12, d: 30, color: 0x595151, walls: makeWallObject([1,1,0,0,1])}],
//     [new THREE.Vector3(5,0,10), (Math.PI / 2)*3, {w: 10, h: 12, d: 30, color: 0x595151, walls: makeWallObject([1,1,0,0,1])}],
//     [new THREE.Vector3(-5,0,40), (Math.PI / 2), {w: 10, h: 12, d: 10, color: 0x595151, walls: makeWallObject([1,0,1,0,1])}],
//     [new THREE.Vector3(45,0,-30), (Math.PI / 2)*2, {w: 10, h: 12, d: 30, color: 0x595151, walls: makeWallObject([1,1,0,0,1])}],
//     [new THREE.Vector3(45,0,-65), (Math.PI / 2)*2, {w: 10, h: 12, d: 30, color: 0x595151, walls: makeWallObject([1,1,0,0,1])}],
//     [new THREE.Vector3(45,0,-35), (Math.PI / 2)*2, {w: 10, h: 12, d: 5, color: 0x595151, walls: makeWallObject([1,0,0,0,1])}],
//     [new THREE.Vector3(32.5,0,50), (Math.PI / 2), {w: 20, h: 12, d: 30, color: 0x595151, walls: makeWallObject([1,1,1,0,1])}]
// ]

// [new THREE.Vector3(0,24,10), (Math.PI / 2)*2, {w: 20, h: 12, d: 30, color: 0x595151, walls: makeWallObject([0,0,0,0,1])}],
// [new THREE.Vector3(0,24,-10), 0, {w: 20, h: 12, d: 10, color: 0x00FF00, walls: makeWallObject([0,0,0,0,1])}],
// [new THREE.Vector3(0,24,0), 0, {w: 20, h: 12, d: 30, color: 0x595151, walls: makeWallObject([0,0,0,0,1])}],
// [new THREE.Vector3(-5,24,10), (Math.PI / 2), {w: 10, h: 12, d: 30, color: 0x595151, walls: makeWallObject([0,0,0,0,1])}],
// [new THREE.Vector3(5,24,10), (Math.PI / 2)*3, {w: 10, h: 12, d: 30, color: 0x595151, walls: makeWallObject([0,0,0,0,1])}],
// [new THREE.Vector3(-5,24,40), (Math.PI / 2), {w: 10, h: 12, d: 10, color: 0x595151, walls: makeWallObject([0,0,0,0,1])}],
// [new THREE.Vector3(45,24,-30), (Math.PI / 2)*2, {w: 10, h: 12, d: 30, color: 0x595151, walls: makeWallObject([0,0,0,0,1])}],
// [new THREE.Vector3(45,24,-65), (Math.PI / 2)*2, {w: 10, h: 12, d: 30, color: 0x595151, walls: makeWallObject([0,0,0,0,1])}],
// [new THREE.Vector3(45,24,-35), (Math.PI / 2)*2, {w: 10, h: 12, d: 5, color: 0x595151, walls: makeWallObject([0,0,0,0,1])}],
// [new THREE.Vector3(32.5,24,50), (Math.PI / 2), {w: 20, h: 12, d: 30, color: 0x595151, walls: makeWallObject([0,0,0,0,1])}],
// [new THREE.Vector3(45,24,-90), (Math.PI / 2)*2, {w: 10, h: 12, d: 25, color: 0x595151, walls: makeWallObject([0,0,0,0,1])}],
// [new THREE.Vector3(0,24,-150), (Math.PI / 2)*2, {w: 100, h: 24, d: 60, color: 0x595151, walls: makeWallObject([0,0,0,0,1])}],
// [new THREE.Vector3(0,12,-150), (Math.PI / 2)*2, {w: 100, h: 24, d: 0, color: 0x595151, walls: makeWallObject([0,0,0,0,1])}],
// [new THREE.Vector3(0,12,-90), (Math.PI / 2)*2, {w: 100, h: 12, d: 0, color: 0x595151, walls: makeWallObject([0,0,0,0,1])}],
// [new THREE.Vector3(0,23,-90), (Math.PI / 2)*2, {w: 80, h: 13, d: 0, color: 0x595151, walls: makeWallObject([0,0,0,0,1])}],