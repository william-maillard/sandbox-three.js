import * as THREE from 'three';
import { move_camera, camera_direction, rotate_camera, velocityX, velocityY } from './camera.js'




let mouseButton = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2
};

let mouse = {
    coord: new THREE.Vector2(0, 0),
    x: 0, lastX : 0,
    y: 0, lastY : 0,
    isButtonClicked: [false, false, false],
};

export function setup_inputs_handler() {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);
    // we can also add it to window to prevent browser scrall page bug is it appears
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
}

function handleMouseMove(event) {
    let deltaX = event.movementX;
    let deltaY = event.movementY;

    velocityX += deltaX * 0.002; // Adjust horizontal speed
    velocityY += deltaY * 0.002; // Adjust vertical speed
}

function handleMouseDown(event) {
    mouse.isButtonClicked[event.button] = true;
    mouse.x = event.clientX;
    mouse.y = event.clientY;
}

function handleMouseUp(event) {
    mouse.isButtonClicked[event.button] = false;
    mouse.x = event.clientX;
    mouse.y = event.clientY;
}

function handleKeyDown(event) {
    move_camera(event.key);
}
