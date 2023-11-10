import * as THREE from 'three';
import * as CANNON from "cannon";

export default () => {

  // 3 meshes
  // base
  // body
  // orb

  let baseGeo = new THREE.BoxGeometry(2.5, 0.5, 2.5);
  let bodyGeo = new THREE.BoxGeometry(1.5, 3, 1.5);
  let orbGeo = new THREE.SphereGeometry(0.75);

  let baseMat = new THREE.MeshBasicMaterial({ color:0x592929 })
  let bodyMat = new THREE.MeshBasicMaterial({ color:0x784444 })
  let orbMat = new THREE.MeshStandardMaterial({ color:0x85e4ff })

  let baseMesh = new THREE.Mesh(baseGeo, baseMat);
  let bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
  let orbMesh = new THREE.Mesh(orbGeo, orbMat);
  
  let orbLight = new THREE.PointLight(0x6bc9ff, 100, 100, 2.5)
  orbMesh.add(orbLight);

  let alterMesh = new THREE.Group();
  alterMesh.add(baseMesh, bodyMesh, orbMesh);

  let edgeGeo = new THREE.EdgesGeometry(orbGeo);
  var edgeMat = new THREE.LineBasicMaterial({ color: 0x85e4ff });
  var edgeMesh = new THREE.LineSegments(edgeGeo, edgeMat);

  orbMesh.userData.edgeMesh = edgeMesh;
  orbMesh.userData.isInteractable = true;

  let phyGeo = new CANNON.Box(new CANNON.Vec3(1.25, 2, 1.25));
  let phyBody = new CANNON.Body({ shape: phyGeo, mass: 0 });
  phyBody.userData = { collisionClass: "floor", construct_id: undefined, physicsMesh: alterMesh, name: "sacrifice" }

  orbMesh.userData.physicsBody = phyBody;
  orbMesh.userData.isChild = true;
  console.log(orbMesh)

  return [orbMesh, phyBody, alterMesh]
}