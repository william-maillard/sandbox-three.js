import * as THREE from 'three';
import { move_camera, setVelocityX, setVelocityY, getVelocityX, getVelocityY } from './camera.js'




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

// if we want to add command personalisation later
let mouseButtonForCameraMovement = mouseButton.LEFT;
function handleMouseMove(event) {
        if (mouse.isButtonClicked[mouseButtonForCameraMovement]) {
        let deltaX = event.movementX;
        let deltaY = event.movementY;

        setVelocityX(
            getVelocityX() + deltaX * 0.002 
        );
        setVelocityY(
            getVelocityY() + deltaY * 0.002
        );
    }
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
