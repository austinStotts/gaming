import * as THREE from "three";

export default () => {
    const crosshairSize = 0.02;
    const crosshairColor = 0xffffff; // White
    
    const crosshairMaterial = new THREE.LineBasicMaterial({ color: crosshairColor });
    
    // Create vertical line
    const verticalLineGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, -crosshairSize, 0),
      new THREE.Vector3(0, crosshairSize, 0),
    ]);
    
    const verticalLine = new THREE.Line(verticalLineGeometry, crosshairMaterial);
    
    // Create horizontal line
    const horizontalLineGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-crosshairSize, 0, 0),
      new THREE.Vector3(crosshairSize, 0, 0),
    ]);
    
    const horizontalLine = new THREE.Line(horizontalLineGeometry, crosshairMaterial);
    
    // Add lines to a group
    const crosshairGroup = new THREE.Group();
    crosshairGroup.add(verticalLine);
    crosshairGroup.add(horizontalLine);
    
    // Position the crosshair group in the center of the screen
    crosshairGroup.position.set(0, 2, 1.4); // Adjust the z-coordinate to ensure it's in front of the camera
    
    // camera.position.set(0,2,2);
    // camera.lookAt(0,2,0);

    // Add the crosshair group to the scene
    return crosshairGroup
}