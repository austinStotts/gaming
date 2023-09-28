import * as THREE from 'three';
import * as CANNON from "cannon";


export default (width, height, depth, color, wireframe=false) => {
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const material = new THREE.MeshBasicMaterial({ color: color, wireframe: wireframe });
    let cube = new THREE.Mesh(geometry, material);
    // if(collision) {
    //     const collisionBoxGeometry = new THREE.BoxGeometry(width, height, depth);
    //     const collisionBoxMaterial = new THREE.MeshBasicMaterial({ wireframe: true });
    //     const collisionBox = new THREE.Mesh(collisionBoxGeometry, collisionBoxMaterial);
    //     cube.add(collisionBox);
    // }
    return cube;
}