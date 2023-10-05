import * as THREE from 'three';
import * as CANNON from "cannon";

let get_random = (n) => {
    if((Math.floor(Math.random() * 100)) % 2 == 0) {
      return (Math.random() * n) * -1;
    } else {
      return (Math.random() * n)
    }
  }

export default (width, height, depth, mass, area=false) => {
    let shape = new CANNON.Box(new CANNON.Vec3(width/2, height/2, depth/2));
    let body = new CANNON.Body({ mass, angularVelocity: {x: 0, y: 0, z: 0}, angularDamping: 0.01 });
    body.addShape(shape);
    if(area) { body.position.set(get_random(area), 1, get_random(area)) }
    return body;
}