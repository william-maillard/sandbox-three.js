import { move_camera, camera_direction, rotate_camera } from './camera.js'

let mouseButton = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2
};

let mouse = {
    x: 0, lastX : 0,
    y: 0, lastY : 0,
    isButtonClicked: [false, false, false],
};

export function setup_inputs_handler() {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
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
function handleMouseMove(event) {

}
