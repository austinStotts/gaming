import * as THREE from 'three';
import * as CANNON from "cannon";

// (width=10, height=12, rotate=false) => {

//     let treadGeometry = new THREE.BoxGeometry(width, 1, height/8);
//     let treadMaterial = new THREE.MeshBasicMaterial({ color: 0x00EE00 });
//     let stairGroup = new THREE.Group();

//     let treadShape;

//     treadShape = new CANNON.Box(new CANNON.Vec3(width/2, 0.5, (height/height)/2)) 
//     let treadMaterialCannon = new CANNON.Material("treadMaterialCannon");
//     treadMaterialCannon.friction = 0.4;
//     treadMaterialCannon.restitution = 0;
//     let treadBodies = [];
//     if(rotate) { stairGroup.rotateOnAxis(new THREE.Vector3(0,1,0), (Math.PI)) }
//     for(let i = 0; i < height+1; i++) {
//         let tread = new THREE.Mesh(treadGeometry, treadMaterial);
//         let treadBody = new CANNON.Body({ shape: treadShape, mass: 0, collisionFilterGroup: 1, collisionFilterMask: -1, });
//         treadBody.material = treadMaterialCannon;
//         stairGroup.add(tread);
//         // rotate ? tread.position.x += i-(i/height+1) : tread.position.z += i-(i/height+1);
//         tread.position.z += i-(i/height+1)
//         tread.position.y += i-(i/height+1);
//         // treadBody.quaternion.w.toFixed(stairGroup.quaternion.w);
//         let angle = (Math.PI/12);
//         // tread.quaternion.setFromAxisAngle(new THREE.Vector3(1, 0, 0), i == height-1 ? angle/2 : angle)
//         treadBody.position.copy(tread.position);
//         treadBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), i == height-1 ? angle/2 : angle)
//         treadBody.userData = {collisionClass: "floor"}
//         treadBodies.push(treadBody);
//     }

//     // let treadBodyFinal = new CANNON.Body({ shape: treadShape, mass: 0, collisionFilterGroup: 1, collisionFilterMask: -1, });
//     // treadBodyFinal.material = treadMaterialCannon;
    


//     return [stairGroup, treadBodies];
// }

export default (width=10, height=12, angle=0, position=new CANNON.Vec3(0,0,0), ) => {

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('../stairs.jpg');
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    const repeatX = width; 
    const repeatY = height/2; 
    texture.repeat.set(repeatX, repeatY);

    let treadGeometry = new THREE.BoxGeometry(width, 1, height/8);
    let treadMaterial = new THREE.MeshStandardMaterial({ map: texture });
    // let stairGroup = new THREE.Group();

    let treadShape = new CANNON.Box(new CANNON.Vec3(width/2, 0.5, (height/height)/2));
    let treadMaterialCannon = new CANNON.Material("treadMaterialCannon");
    treadMaterialCannon.friction = 0.4;
    treadMaterialCannon.restitution = 0;

    let treadBodies = [];
    let treadMeshes = [];

    for(let i = 0; i < height+1; i++) {
        let treadBody = new CANNON.Body({ shape: treadShape, mass: 0, collisionFilterGroup: 1, collisionFilterMask: -1, });
        treadBody.material = treadMaterialCannon;
        treadBody.position.copy(position);
        let tread = new THREE.Mesh(treadGeometry, treadMaterial);
        treadBody.position.y += i;
        let quatY = new CANNON.Quaternion();
        let quatX = new CANNON.Quaternion();
        if(angle == 0) {
            tread.quaternion.copy(treadBody.quaternion);
            quatX.setFromAxisAngle(new CANNON.Vec3(1,0,0), (0.05));
            treadBody.quaternion = quatX;
            treadBody.position.z += i;
            tread.position.copy(treadBody.position);
            treadMeshes.push(tread);
        } else if(angle == 1) {
            quatY.setFromAxisAngle(new CANNON.Vec3(0,1,0), (Math.PI/2));
            quatX.setFromAxisAngle(new CANNON.Vec3(1,0,0), (0.05));
            treadBody.quaternion = quatY;
            tread.quaternion.copy(treadBody.quaternion);
            treadBody.quaternion.x = quatX.x;
            treadBody.position.x += i;
            tread.position.copy(treadBody.position);
            treadMeshes.push(tread);
        } else if(angle == 2) {
            tread.quaternion.copy(treadBody.quaternion);
            quatX.setFromAxisAngle(new CANNON.Vec3(1,0,0), (-0.05));
            treadBody.quaternion = quatX;
            treadBody.position.z -= i;
            tread.position.copy(treadBody.position);
            treadMeshes.push(tread);
        } else if(angle == 3) {
            quatY.setFromAxisAngle(new CANNON.Vec3(0,1,0), (Math.PI/2));
            quatX.setFromAxisAngle(new CANNON.Vec3(1,0,0), (-0.05));
            treadBody.quaternion = quatY;
            tread.quaternion.copy(treadBody.quaternion);
            treadBody.quaternion.x = quatX.x;
            treadBody.position.x -= i;
            tread.position.copy(treadBody.position);
            treadMeshes.push(tread);
        }

        

        
        treadBody.userData = {collisionClass: "floor"}
        treadBodies.push(treadBody)
        






    }

    return [treadMeshes, treadBodies];
}