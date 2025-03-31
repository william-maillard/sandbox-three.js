import * as THREE from 'three';
import { PerspectiveCamera } from 'three';
import { world_limit } from '../helpers/world.js'

// rotation center
export const pivot = new THREE.Vector3(0, 0.5, 0);
// To convert mouse movement on the screen axes
// to a movement in the 3D screen
const raycaster = new THREE.Raycaster();
const radius = 5; // Distance caméra ↔ pivot


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
camera.position.set(0, 0.5, radius);
camera.lookAt(pivot)

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

// Variables for inertia effect
export var velocityX = 0;
export var velocityY = 0;
const friction = 0.95; // Gradual speed reduction
let pitch = 0;
const maxPitch = Math.PI / 2.5;

let camera_rotation_speed = 0.005; // Vitesse de rotation
export function rotate_camera(thetaX, thetaY) {
    let offset = new THREE.Vector3().subVectors(camera.position, pivot);

    // Rotate around Y-axis (horizontal rotation)
    let cosY = Math.cos(thetaY);
    let sinY = Math.sin(thetaY);
    let newX = offset.x * cosY - offset.z * sinY;
    let newZ = offset.x * sinY + offset.z * cosY;

    offset.x = newX;
    offset.z = newZ;

    // Rotate around X-axis (vertical rotation)
    let cosX = Math.cos(thetaX);
    let sinX = Math.sin(thetaX);
    let newY = offset.y * cosX - offset.z * sinX;
    let newZ2 = offset.y * sinX + offset.z * cosX;

    // Apply vertical rotation limits
    if(newY > -maxPitch * radius  &&  newY < maxPitch * radius) {
        offster.y = newY;
        offset.z = newZ;
    }

    // Update camera position and direction
    camera.position.copy(pivot.clone().add(offset));
    camera.lookAt(pivot);
}