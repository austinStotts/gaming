import * as THREE from 'three';
import * as CANNON from 'cannon'

import Door from "./constructs/door";
import Lantern from './constructs/lantern';
import Stairs from './constructs/stairs';
import Altar from './constructs/altar';
import Platform from './constructs/platform';

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
        spawnLocation: [-45,12,95],
        structures:[
            [new THREE.Vector3(0,12,10), (Math.PI / 2)*2, {w: 20, h: 12, d: 30, color: 0x595151, walls: makeWallObject([1,1,1,0,1])}],
            [new THREE.Vector3(0,12,-10), 0, {w: 20, h: 12, d: 10, color: 0x00FF00, walls: makeWallObject([0,0,0,0,1])}],
            [new THREE.Vector3(0,12,0), 0, {w: 20, h: 12, d: 30, color: 0x595151, walls: makeWallObject([1,1,1,0,1])}],
            [new THREE.Vector3(-5,12,10), (Math.PI / 2), {w: 10, h: 12, d: 30, color: 0x595151, walls: makeWallObject([1,1,0,0,1])}],
            [new THREE.Vector3(5,12,10), (Math.PI / 2)*3, {w: 10, h: 12, d: 30, color: 0x595151, walls: makeWallObject([1,1,0,0,1])}],
            [new THREE.Vector3(-5,12,39.9), (Math.PI / 2), {w: 10, h: 12, d: 10, color: 0x595151, walls: makeWallObject([1,0,1,0,1])}],
            [new THREE.Vector3(45,12,-30), (Math.PI / 2)*2, {w: 10, h: 12, d: 30, color: 0x595151, walls: makeWallObject([1,1,0,0,1])}],
            [new THREE.Vector3(45,12,-90), (Math.PI / 2)*2, {w: 10, h: 12, d: 55, color: 0x595151, walls: makeWallObject([1,1,0,0,1])}],
            [new THREE.Vector3(45,12,-35), (Math.PI / 2)*2, {w: 10, h: 12, d: 5, color: 0x595151, walls: makeWallObject([1,0,0,0,1])}],
            [new THREE.Vector3(32.5,12,50), (Math.PI / 2), {w: 20, h: 12, d: 30, color: 0x595151, walls: makeWallObject([1,1,1,0,1])}],
            [new THREE.Vector3(0,0,-150), (Math.PI / 2)*2, {w: 100, h: 24, d: 60, color: 0x595151, walls: makeWallObject([1,1,0,0,1])}],
            [new THREE.Vector3(0,0,-150), (Math.PI / 2)*2, {w: 100, h: 24, d: 0, color: 0x595151, walls: makeWallObject([0,0,1,0,1])}],
            [new THREE.Vector3(0,0,-90), (Math.PI / 2)*2, {w: 100, h: 12, d: 0, color: 0x595151, walls: makeWallObject([0,0,1,0,1])}],
            [new THREE.Vector3(0,11,-90), (Math.PI / 2)*2, {w: 80, h: 13, d: 0, color: 0x595151, walls: makeWallObject([0,0,1,0,0])}],
            [new THREE.Vector3(-45,12,-90), (Math.PI / 2)*2, {w: 10, h: 12, d: 30, color: 0x595151, walls: makeWallObject([1,1,0,0,1])}],
            [new THREE.Vector3(55,12,-80), (Math.PI / 2), {w: 10, h: 12, d: 30, color: 0x595151, walls: makeWallObject([1,1,0,0,1])}],
            [new THREE.Vector3(-45,12,-60), ((Math.PI / 2)*2), {w: 10, h: 12, d: 9.8, color: 0x595151, walls: makeWallObject([0,1,1,0,1])}],
            [new THREE.Vector3(-55,6,80), ((Math.PI / 2)*3), {w: 30, h: 18, d: 30, color: 0x595151, walls: makeWallObject([1,1,1,0,1])}],
            [new THREE.Vector3(55,6,-80.1), ((Math.PI / 2)), {w: 30, h: 6, d: 0.1, color: 0x595151, walls: makeWallObject([0,0,1,0,0])}],
            [new THREE.Vector3(65,12,-80.1), ((Math.PI / 2)), {w: 10, h: 12, d: 0.1, color: 0x595151, walls: makeWallObject([0,0,1,0,0])}],
            [new THREE.Vector3(45,12,-80.1), ((Math.PI / 2)), {w: 10, h: 12, d: 0.1, color: 0x595151, walls: makeWallObject([0,0,1,0,0])}],
        ],
        ceilings: [
            [new THREE.Vector3(0,24,-40), 0, {w: 20, h: 12, d: 70, color: 0x595151, walls: makeWallObject([0,0,0,0,1])}],
            [new THREE.Vector3(22.5,24,-10), 0, {w: 35, h: 12, d: 10, color: 0x595151, walls: makeWallObject([0,0,0,0,1])}],
            [new THREE.Vector3(-30,24,-10), 0, {w: 40, h: 12, d: 10, color: 0x595151, walls: makeWallObject([0,0,0,0,1])}],
            [new THREE.Vector3(-45,24,0), 0, {w: 10, h: 12, d: 90, color: 0x595151, walls: makeWallObject([0,0,0,0,1])}],
            [new THREE.Vector3(-65,24,20), 0, {w: 30, h: 12, d: 25, color: 0x595151, walls: makeWallObject([0,0,0,0,1])}],
            [new THREE.Vector3(0,24,90), 0, {w: 100, h: 12, d: 60, color: 0x595151, walls: makeWallObject([0,0,0,0,1])}],
            [new THREE.Vector3(45,24,50), 0, {w: 10, h: 12, d: 40, color: 0x595151, walls: makeWallObject([0,0,0,0,1])}],
            [new THREE.Vector3(60,24,50), 0, {w: 40, h: 12, d: 10, color: 0x595151, walls: makeWallObject([0,0,0,0,1])}],
            [new THREE.Vector3(95,24,40), 0, {w: 30, h: 12, d: 30, color: 0x595151, walls: makeWallObject([0,0,0,0,1])}],
        ],
        constructs: [
            {class: Door, id: "0001", args: [5, 12, true, false], location: [-49.95, 18, 32.5], name: "locked door" },
            {class: Door, id: "0002", args: [10, 12, false, true], location: [-45, 18, 90], name: "door - open when ready" },
            {class: Door, id: "0003", args: [10, 12, true, false], location: [35, 18, -5], name: "locked door" },
            {class: Lantern, id: "lamp", args: [0x857070, 25, 0.75, ], location: [-8, 23, 29], name: "lantern"},
            {class: Lantern, id: "lamp", args: [0x857070, 25, 0.75, ], location: [8, 23, 29], name: "lantern"},
            {class: Lantern, id: "lamp", args: [0x857070, 25, 0.75, ], location: [-8, 23, -39], name: "lantern"},
            {class: Lantern, id: "lamp", args: [0x857070, 25, 0.75, ], location: [8, 23, -39], name: "lantern"},
            {class: Lantern, id: "lamp", args: [0x857070, 30, 1, ], location: [48, 23, 148], name: "lantern"},
            {class: Lantern, id: "lamp", args: [0x857070, 30, 1, ], location: [-48, 23, 148], name: "lantern"},
            {class: Lantern, id: "lamp", args: [0x857070, 30, 1, ], location: [36, 23, 91], name: "lantern"},
            {class: Lantern, id: "lamp", args: [0x857070, 30, 1, ], location: [-36, 23, 91], name: "lantern"},
            {class: Lantern, id: "lamp", args: [0x857070, 30, 1, ], location: [27, 23, 91], name: "lantern"},
            {class: Lantern, id: "lamp", args: [0x857070, 30, 1, ], location: [-27, 23, 91], name: "lantern"},
            {class: Lantern, id: "lamp", args: [0x857070, 30, 1, ], location: [18, 23, 91], name: "lantern"},
            {class: Lantern, id: "lamp", args: [0x857070, 30, 1, ], location: [-18, 23, 91], name: "lantern"},
            {class: Lantern, id: "lamp", args: [0x857070, 30, 1, ], location: [9, 23, 91], name: "lantern"},
            {class: Lantern, id: "lamp", args: [0x857070, 30, 1, ], location: [-9, 23, 91], name: "lantern"},
            {class: Lantern, id: "lamp", args: [0x857070, 30, 1, ], location: [0, 23, 91], name: "lantern"},
            {class: Lantern, id: "lamp", args: [0x857070, 30, 1, ], location: [-49, 23, 37], name: "lantern"},
            {class: Lantern, id: "lamp", args: [0x857070, 40, 1, ], location: [41, 23, 51], name: "lantern"},
            {class: Lantern, id: "lamp", args: [0x857070, 40, 1, ], location: [103, 16, 41], name: "lantern"},
            {class: Lantern, id: "lamp", args: [0x857070, 40, 1, ], location: [103, 16, 69], name: "lantern"},
            {class: Stairs, id: "stairs", args: [10,12,2, new CANNON.Vec3(-45,-0.6,102.75)], location: [-46,0,94], name: "stairs"},
            {class: Stairs, id: "stairs", args: [10,12,2, new CANNON.Vec3(45,-0.6,102.75)], location: [-46,0,94], name: "stairs"},
            {class: Stairs, id: "stairs", args: [10,12,3, new CANNON.Vec3(92.8,-0.6,55)], location: [95,5.4,52], name: "stairs"},
            {class: Altar, id: "altar", args: [], location: [0,12,-5], name: "altar" },
            {class: Platform, id: "platform", args: [20, 4, 30], location: [0,0,120], name: "platform"},
            {class: Platform, id: "platform", args: [10, 1.5, 10], location: [-45,10,145], name: "platform"},
            {class: Platform, id: "platform", args: [10, 1.5, 10], location: [45,10,145], name: "platform"},
            {class: Platform, id: "platform", args: [10, 1.5, 5], location: [-38,6,147.5], name: "platform"},
            {class: Platform, id: "platform", args: [10, 1.5, 5], location: [38,6,147.5], name: "platform"},
            {class: Platform, id: "platform", args: [5, 1.5, 5], location: [-30,4,147.5], name: "platform"},
            {class: Platform, id: "platform", args: [5, 1.5, 5], location: [30,4,147.5], name: "platform"},
            {class: Platform, id: "platform", args: [50, 5, 10], location: [0,0,147.5], name: "platform"},
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