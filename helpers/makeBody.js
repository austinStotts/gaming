import * as THREE from 'three';
import * as CANNON from "cannon";

let get_random = (n) => {
    if((Math.floor(Math.random() * 100)) % 2 == 0) {
      return (Math.random() * n) * -1;
    } else {
      return (Math.random() * n)
    }
  }

export default (width, height, depth, mass, area) => {
    let shape = new CANNON.Box(new CANNON.Vec3(width, height, depth));
    let body = new CANNON.Body({ mass });
    body.addShape(shape);
    body.angularVelocity.set(1, 0, 1);
    body.angularDamping = 0.01;
    body.position.set(get_random(area), 1, get_random(area));
    return body;
}