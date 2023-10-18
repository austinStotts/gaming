import * as THREE from 'three';

let makeWallObject = (a) => {
    return {
        leftwall: a[0] ? true : false,
        rightwall: a[1] ? true : false,
        backwall: a[2] ? true : false,
        frontwall: a[3] ? true : false,
        floor: a[4] ? true : false,
    }
}

export default [
    [new THREE.Vector3(0,0,10), (Math.PI / 2)*2, {w: 20, h: 12, d: 30, color: 0x595151, walls: makeWallObject([1,1,1,0,1])}],
    [new THREE.Vector3(0, 0, 0), 0, {w: 20, h: 12, d: 30, color: 0x595151, walls: makeWallObject([1,1,1,0,1])}],
    [new THREE.Vector3(-5, 0, 10), (Math.PI / 2), {w: 10, h: 12, d: 30, color: 0x595151, walls: makeWallObject([1,1,0,0,1])}],
    [new THREE.Vector3(5, 0, 10), (Math.PI / 2)*3, {w: 10, h: 12, d: 30, color: 0x595151, walls: makeWallObject([1,1,0,0,1])}],
    [new THREE.Vector3(-5,0,40), (Math.PI / 2), {w: 10, h: 12, d: 10, color: 0x595151, walls: makeWallObject([1,0,1,0,1])}],
    [new THREE.Vector3(45,0,-30), (Math.PI / 2)*2, {w: 10, h: 12, d: 30, color: 0x595151, walls: makeWallObject([1,1,0,0,1])}],
    [new THREE.Vector3(45,0,-65), (Math.PI / 2)*2, {w: 10, h: 12, d: 30, color: 0x595151, walls: makeWallObject([1,1,0,0,1])}],
    [new THREE.Vector3(45,0,-35), (Math.PI / 2)*2, {w: 10, h: 12, d: 5, color: 0x595151, walls: makeWallObject([1,0,0,0,1])}],
    [new THREE.Vector3(32.5,0,50), (Math.PI / 2), {w: 20, h: 12, d: 30, color: 0x595151, walls: makeWallObject([1,1,1,0,1])}]
]