import { PerspectiveCamera } from 'three';

// There are differend kind of camera, 
// This one allow us to set a point of view
// to look from
export const camera = new PerspectiveCamera(
    75, // Field Of View in degree
    window.innerWidth / window.innerHeight, // aspect ration
    0.1, // near clipping
    1000 // far clipping
);

camera.position.z = 4;
camera.position.y = 0.5;