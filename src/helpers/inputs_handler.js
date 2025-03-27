import { move_camera, camera_direction, rotate_camera } from './camera.js'

// Variables pour la gestion du déplacement et de la rotation
let lastMouseX = 0;
let lastMouseY = 0;
let isMouseDown = false;

let click = {
    x: 0,
    y: 0,
    clicked: false
};

export function setup_inputs_handler() {
    window.addEventListener('click', (event) => {
        console.log(event);
        click.x = event.clientX;
        click.y = event.clientY;

        if (click.clicked) {
            click.clicked = false;
            console.log('Released at:', click.x, click.y);
        }
        else {
            click.clicked = true;
            console.log('Clicked at:', click.x, click.y);
        }

        if (event.button === 0) { // Si le bouton gauche de la souris est enfoncé
            isMouseDown = true;
            lastMouseX = event.clientX;
            lastMouseY = event.clientY;
        }
    });
    // Écouter les événements du clavier et de la souris
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

}

function handleMouseDown(event) {
    if (event.button === 0) { // Si le bouton gauche de la souris est enfoncé
        isMouseDown = true;
        lastMouseX = event.clientX;
        lastMouseY = event.clientY;
    }
}


function handleKeyDown(event) {
    switch (event.key) {
        case 'ArrowUp':
            move_camera(camera_direction.UP);
            break;
        case 'ArrowDown':
            move_camera(camera_direction.DOWN);
            break;
        case 'ArrowLeft':
            move_camera(camera_direction.LEFT);
            break;
        case 'ArrowRight':
            move_camera(camera_direction.RIGHT);
            break;
    }
}
function handleMouseMove(event) {
    if (!isMouseDown) return; // Ne pas faire de rotation si la souris n'est pas enfoncée
    
    let deltaX = event.clientX - lastMouseX;
    let deltaY = event.clientY - lastMouseY;
    
    // Appliquer une rotation basée sur le déplacement de la souris
    if (Math.abs(deltaX) > 0) {
        if (deltaX > 0) {
            rotate_camera(camera_direction.RIGHT);
        } else {
            rotate_camera(camera_direction.LEFT);
        }
    }

    if (Math.abs(deltaY) > 0) {
        if (deltaY > 0) {
            rotate_camera(camera_direction.UP);
        } else {
            rotate_camera(camera_direction.DOWN);
        }
    }

    lastMouseX = event.clientX;
    lastMouseY = event.clientY;
}

function handleMouseUp(event) {
    if (event.button === 0) {
        isMouseDown = false;
    }
}
