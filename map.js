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
    [new THREE.Vector3(0,12,10), (Math.PI / 2)*2, {w: 20, h: 12, d: 30, color: 0x595151, walls: makeWallObject([1,1,1,0,1])}],
    [new THREE.Vector3(0,12,-10), 0, {w: 20, h: 12, d: 10, color: 0x00FF00, walls: makeWallObject([0,0,0,0,1])}],
    [new THREE.Vector3(0,12,0), 0, {w: 20, h: 12, d: 30, color: 0x595151, walls: makeWallObject([1,1,1,0,1])}],
    [new THREE.Vector3(-5,12,10), (Math.PI / 2), {w: 10, h: 12, d: 30, color: 0x595151, walls: makeWallObject([1,1,0,0,1])}],
    [new THREE.Vector3(5,12,10), (Math.PI / 2)*3, {w: 10, h: 12, d: 30, color: 0x595151, walls: makeWallObject([1,1,0,0,1])}],
    [new THREE.Vector3(-5,12,40), (Math.PI / 2), {w: 10, h: 12, d: 10, color: 0x595151, walls: makeWallObject([1,0,1,0,1])}],
    [new THREE.Vector3(45,12,-30), (Math.PI / 2)*2, {w: 10, h: 12, d: 30, color: 0x595151, walls: makeWallObject([1,1,0,0,1])}],
    [new THREE.Vector3(45,12,-65), (Math.PI / 2)*2, {w: 10, h: 12, d: 30, color: 0x595151, walls: makeWallObject([1,1,0,0,1])}],
    [new THREE.Vector3(45,12,-35), (Math.PI / 2)*2, {w: 10, h: 12, d: 5, color: 0x595151, walls: makeWallObject([1,0,0,0,1])}],
    [new THREE.Vector3(32.5,12,50), (Math.PI / 2), {w: 20, h: 12, d: 30, color: 0x595151, walls: makeWallObject([1,1,1,0,1])}],
    [new THREE.Vector3(45,12,-90), (Math.PI / 2)*2, {w: 10, h: 12, d: 25, color: 0x595151, walls: makeWallObject([1,1,0,0,1])}],
    [new THREE.Vector3(0,0,-150), (Math.PI / 2)*2, {w: 100, h: 24, d: 60, color: 0x595151, walls: makeWallObject([1,1,0,0,1])}],
    [new THREE.Vector3(0,0,-150), (Math.PI / 2)*2, {w: 100, h: 24, d: 0, color: 0x595151, walls: makeWallObject([0,0,1,0,1])}],
    [new THREE.Vector3(0,0,-90), (Math.PI / 2)*2, {w: 100, h: 12, d: 0, color: 0x595151, walls: makeWallObject([0,0,1,0,1])}],
    [new THREE.Vector3(0,11,-90), (Math.PI / 2)*2, {w: 80, h: 13, d: 0, color: 0x595151, walls: makeWallObject([0,0,1,0,0])}],
]

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