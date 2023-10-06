import * as THREE from 'three';
import * as CANNON from "cannon";
import convexHull from'convex-hull';

export default (w, h) => {

    const floorWidth = w; // Adjust the width as needed
    const floorHeight = 0.1; // Adjust the height as needed
    const floorDepth = h; // Adjust the depth as needed

    
    const geometry = new THREE.BoxGeometry(floorWidth, floorHeight, floorDepth);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const floorMesh = new THREE.Mesh(geometry, material);
    floorMesh.rotation.x = -Math.PI / 4;

    const floorShape = new CANNON.Box(new CANNON.Vec3(floorWidth / 2, floorHeight / 2, floorDepth / 2));
    const floorBody = new CANNON.Body({ mass: 0 });
    floorBody.addShape(floorShape);
    floorBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 4); // Set the angle (45 degrees)
    // floorBody.quaternion.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), -Math.PI / 2); // Set the angle (45 degrees)

    floorBody.collisionFilterGroup = 1;
    floorBody.collisionFilterMask = -1;
    floorBody.userData = { collisionClass: "floor_ramp" }

    return [floorMesh, floorBody];
}