import * as THREE from 'three';
import * as CANNON from 'cannon';

export default class small_ammo {
    constructor (count) {
        this.count = count;
        this.id = "small_ammo";
        this.isStack = true;
        this.img = "small_ammo.jpg";
        this.toBeDeleted = false;
        this.mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0x33ffcc }));
        this.mesh.position.set(5, 10, 0)
        this.body = new CANNON.Body({ shape: new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5)), mass: 10, linearDamping: 0.5, collisionFilterGroup: 3, collisionFilterMask: -1 });
        this.body.position.copy(this.mesh.position)
        this.body.userData = { collisionClass: 'item', hasBeenCollected: false }
    }
}