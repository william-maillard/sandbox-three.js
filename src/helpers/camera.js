import { PerspectiveCamera } from 'three';

export const camera_direction = {
    UP: 0,
    DOWN: 1,
    LEFT: 2,
    RIGHT: 3,
    FORWARD: 4,
    BACKWARD: 5,
}

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

export function move_camera(direction) {
    switch (direction) {
        case camera_direction.UP:
            camera.position.y += 0.1;
            break;
        case camera_direction.DOWN:
            camera.position.y -= 0.1;
            break;
        case camera_direction.LEFT:
            camera.position.x -= 0.1;
            break;
        case camera_direction.RIGHT:
            camera.position.x += 0.1;
            break;
        case camera_direction.FORWARD:
            camera.position.z -= 0.1;
            break;
        case camera_direction.BACKWARD:
            camera.position.z += 0.1;
            break;
    }
}