import * as THREE from 'three';
import * as CANNON from "cannon";
import Swiftness from '../bonuses/swiftness';
import Turmoil from '../bonuses/turmoil';


let makeArmor = () => {
    let geometry = new THREE.BoxGeometry(1.5, 1.5, 3);
    let material = new THREE.MeshBasicMaterial({ color: 0xfbc02d, wireframe: false, transparent: false });
    let mesh = new THREE.Mesh(geometry, material);
    let edgeGeo = new THREE.EdgesGeometry(geometry);
    let edgeMat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, wireframe: false, transparent: false }); 
    let edgeMesh = new THREE.Mesh(edgeGeo, edgeMat);
    edgeMesh.scale.add(0.5)
    mesh.userData.edgeMesh = edgeMesh;
    mesh.userData.isInteractable = true;

    let shape = new CANNON.Box(new CANNON.Vec3(1, 1, 1.5));
    let body = new CANNON.Body({ shape, mass: 10, angularVelocity: {x: 0, y: 0, z: 0}, angularDamping: 0.01, linearDamping: 0.5 });

    body.collisionFilterGroup = 3;
    body.collisionFilterMask = -1; 
    body.userData = {collisionClass: "armor"};
    mesh.userData.physicsBody = body;

    // body.position.set(l.x, l.y, l.z);
    // mesh.position.copy(body.position);

    return [mesh, body];
}

let roll_bonus = (n) => {
    let list = new Array(80);
    for(let i = 0; i < 15; i++) { list.push(new Swiftness()) }
    for(let i = 0; i < 5; i++) { list.push(new Turmoil()) }
    let bonuses = [];
    for(let i = 0; i < n; i++) {
        let r = Math.ceil(Math.random() * 100)
        if(list[r] != undefined) { bonuses.push(list[r]) }
    }
    return bonuses;
}

export default class Light_Armor {
    constructor() {
        this.display_name = "Light Armor"
        this.max_shield = 25;
        this.current_shield = 25;
        this.timeSinceDMG = Date.now();
        this.id = "light_armor";
        this.text = "helps cover the weak spots... a little";
        [this.mesh, this.body] = makeArmor();
        this.body.userData.name = this.display_name;
        this.bonuses = roll_bonus(2);
        this.check_regen = this.check_regen.bind(this);

        setInterval(() => {
            this.check_regen()
        }, 500)
    }

    check_regen () {
        if(this.timeSinceDMG + 3000 < Date.now()) {
            this.current_shield >= this.max_shield ? this.current_shield=this.max_shield : this.current_shield += 1;
        }
    }

    take_damage (dmg) { // 10 > -5 > -15
        this.timeSinceDMG = Date.now();
        let result = this.current_shield - dmg;
        if(result >= 0) { this.current_shield = result; return 0; }
        else { console.log(result); this.current_shield = 0; return Math.abs(result); }
        
    }
}