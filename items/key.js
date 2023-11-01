import * as THREE from 'three';
import * as CANNON from 'cannon';


let makeKey = (img) => {
    let geometry = new THREE.BoxGeometry(1, 1, 1);
    var textureLoader = new THREE.TextureLoader();
    let texture = textureLoader.load(`https://sl-gaming.s3.amazonaws.com/inv-assets/${img}`);
    var material = new THREE.MeshBasicMaterial({ map: texture });
    var materials = [
      material, // right side
      material, // left side
      material, // top side
      material, // bottom side
      material, // front side
      material, // back side
    ];

    let mesh = new THREE.Mesh(geometry, materials);

    let body = new CANNON.Body({ shape: new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5)), mass: 10, linearDamping: 0.5, collisionFilterGroup: 3, collisionFilterMask: -1 });
    body.userData = { collisionClass: 'item', hasBeenCollected: false }

    return [mesh, body]
}

export default class Key {
    constructor (lock_id, text="a key to an unknown lock") {
        this.count = 1;
        this.name = "Key";
        this.id = "key";
        this.lock_id = lock_id;
        this.isStack = false;
        this.isConsumable = false;
        this.img = "key.jpg";
        this.rarity = "red";
        this.toBeDeleted = false;
        [this.mesh, this.body] = makeKey(this.img);
        this.text = text
    }

    use (player) {

    }
}