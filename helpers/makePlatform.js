import * as THREE from 'three';
import * as CANNON from "cannon";

export default (width, height, depth) => {
    // 2 rectangles
    // one large body, and a top

    let topThickness = 0.125;

    let platBodyGeo = new THREE.BoxGeometry(width, height, depth);
    let platTopGeo = new THREE.BoxGeometry(width, topThickness, depth);

    let platBodyMat = new THREE.MeshStandardMaterial({ color: 0x00FF00 });
    let platTopMat = new THREE.MeshStandardMaterial({ color: 0x0000FF });

    let platBodyMesh = new THREE.Mesh(platBodyGeo, platBodyMat);
    let platTopMesh = new THREE.Mesh(platTopGeo, platTopMat);
    platTopMesh.position.y += (height/2)+topThickness/2;
    platBodyMesh.add(platTopMesh);

    let pBodyGeo = new CANNON.Box(new CANNON.Vec3(width/2, ((height/2)+(topThickness)), depth/2));
    let pBody = new CANNON.Body({ shape: pBodyGeo, mass: 0, collisionFilterGroup: 1, collisionFilterMask: -1 });
    pBody.userData = { collisionClass: "floor" }
    
    let platformMaterial = new CANNON.Material("platformMaterial");
    platformMaterial.friction = 0.4;
    platformMaterial.restitution = 0;

    pBody.material = platformMaterial;


    return [platBodyMesh, pBody];
}