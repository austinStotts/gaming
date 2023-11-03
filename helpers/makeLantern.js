import * as THREE from 'three';
import * as CANNON from "cannon";

export default (color, brightness, falloff) => {
  let textureLoader = new THREE.TextureLoader();
  let texture = textureLoader.load('../lamp.jpg');
  let material = new THREE.MeshBasicMaterial({ map: texture });
  let materials = [
    material, // right side
    material, // left side
    material, // top side
    material, // bottom side
    material, // front side
    material, // back side
  ];

  let lanternGeo = new THREE.BoxGeometry(0.5, 1, 0.5);
  let lanternMesh = new THREE.Mesh(lanternGeo, materials);
  let l1 = new THREE.PointLight(color, brightness, 100, falloff);
  lanternMesh.add(l1);

  lanternMesh.userData.isInteractable = false;

  return lanternMesh
}