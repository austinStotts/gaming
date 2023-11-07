import * as THREE from 'three';
import * as CANNON from 'cannon';

let make_mesh = (img) => {
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
    mesh.position.set(5, 10, 0);
    return mesh;
}

export default class health_pack {
    constructor (count) {
        this.count = count;
        this.name = "Health Pack";
        this.id = "health_pack";
        this.isStack = false;
        this.isConsumable = true;
        this.img = "health_pack.jpg";
        this.rarity = "white";
        this.toBeDeleted = false;
        this.mesh = make_mesh(this.img);
        this.body = new CANNON.Body({ shape: new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5)), mass: 10, linearDamping: 0.5, collisionFilterGroup: 3, collisionFilterMask: -1 });
        this.body.userData = { collisionClass: 'item', hasBeenCollected: false }
        this.text = "+25HP will help stop the bleeding"
    }

    use (player) {
        player.hp += 25;
        if(player.hp > player.maxHP) { player.hp = player.maxHP }
        return true;
    }
}