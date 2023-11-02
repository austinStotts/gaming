import * as THREE from 'three';
import * as CANNON from "cannon";

export default () => {

  const thickness = 0.1;

  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load('../lamp.jpg');
  var material = new THREE.MeshBasicMaterial({ map: texture });
  var materials = [
    material, // right side
    material, // left side
    material, // top side
    material, // bottom side
    material, // front side
    material, // back side
  ];

//   let mesh = new THREE.Mesh(geometry, materials);

  const lanternGeo = new THREE.BoxGeometry(0.5, 1, 0.5);
//   const lanternMat = new THREE.MeshStandardMaterial({ map: material });
  let lanternMesh = new THREE.Mesh(lanternGeo, materials);

  var l1 = new THREE.PointLight(0x907070, 25, 100, 0.75);
  lanternMesh.add(l1);


//   const doorShape = new CANNON.Box(new CANNON.Vec3(thickness / 2, height / 2, width / 2));
//   const doorBody = new CANNON.Body({shape: doorShape, mass: 0, collisionFilterGroup: 1, collisionFilterMask: -1 });
//   doorBody.userData = { collisionClass: 'door', mesh: doorMesh }

//   let edgeGeo = new THREE.EdgesGeometry(wallGeometry);
//   var edgeMat = new THREE.LineBasicMaterial({ color: 0xffffff }); // You can customize the color and linewidth
//   var edgeMesh = new THREE.LineSegments(edgeGeo, edgeMat);

//   doorMesh.userData.edgeMesh = edgeMesh;
  lanternMesh.userData.isInteractable = false;
//   doorMesh.userData.physicsBody = doorBody;
//   if(rotate90) { doorMesh.rotateY(-Math.PI/2) }
//   doorBody.quaternion.copy(doorMesh.quaternion);

  return lanternMesh
}