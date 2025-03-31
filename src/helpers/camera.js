import * as THREE from 'three';
import { PerspectiveCamera } from 'three';
import { world_limit } from '../helpers/world.js'

export const camera_direction = {
    UP: "a",
    DOWN: "q",
    LEFT: "ArrowLeft",
    RIGHT: "ArrowRight",
    FORWARD: "ArrowUp",
    BACKWARD: "ArrowDown",
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

// initial position of the camera
camera.position.z = 4;
camera.position.y = 0.5;

// vector reprsenting the camera direction
let camera_direction_vector = new THREE.Vector3(0, 0, -1);

let camera_movement_speed = 0.1;
export function move_camera(direction) {
    console.log(direction);
    console.log(direction === camera_direction.UP)
    if (direction === camera_direction.UP) {
        if (camera.position.y < world_limit.Y_MAX) {
            camera.position.y += camera_movement_speed;
        }
    } else if (direction === camera_direction.DOWN) {
        if (camera.position.y > world_limit.Y_MIN) {
            camera.position.y -= camera_movement_speed;
        }
    } else if (direction === camera_direction.LEFT) {
        if (camera.position.x > world_limit.X_MIN) {
            camera.position.x -= camera_movement_speed;
        }
    } else if (direction === camera_direction.RIGHT) {
        if (camera.position.x < world_limit.X_MAX) {
            camera.position.x += camera_movement_speed;
        }
    } else if (direction === camera_direction.FORWARD) {
        if (camera.position.z < world_limit.Z_MAX) {
            camera.position.z += camera_movement_speed;
        }
    } else if (direction === camera_direction.BACKWARD) {
        if (camera.position.z > world_limit.Z_MIN) {
            camera.position.z -= camera_movement_speed;
        }
    }
}

let camera_rotation_speed = 0.005; // Vitesse de rotation
export function rotate_camera(direction) {
    let angle = camera_rotation_speed;

    switch (direction) {
        case camera_direction.UP:  // Rotation vers le haut (autour de l'axe X)
            camera.position.y = camera.position.y * Math.cos(angle) - camera.position.z * Math.sin(angle);
            camera.position.z = camera.position.y * Math.sin(angle) + camera.position.z * Math.cos(angle);
            break;

        case camera_direction.DOWN:  // Rotation vers le bas (autour de l'axe X)
            camera.position.y = camera.position.y * Math.cos(-angle) - camera.position.z * Math.sin(-angle);
            camera.position.z = camera.position.y * Math.sin(-angle) + camera.position.z * Math.cos(-angle);
            break;

        case camera_direction.LEFT:  // Rotation vers la gauche (autour de l'axe Y)
            camera.position.x = camera.position.x * Math.cos(angle) - camera.position.z * Math.sin(angle);
            camera.position.z = camera.position.x * Math.sin(angle) + camera.position.z * Math.cos(angle);
            break;

        case camera_direction.RIGHT:  // Rotation vers la droite (autour de l'axe Y)
            camera.position.x = camera.position.x * Math.cos(-angle) - camera.position.z * Math.sin(-angle);
            camera.position.z = camera.position.x * Math.sin(-angle) + camera.position.z * Math.cos(-angle);
            break;
    }
}