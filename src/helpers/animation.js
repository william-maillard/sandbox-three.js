import { animate_arrow } from '../objects/basic_models/arrow.js';
import { animate_cube } from '../objects/basic_models/cube.js';
import { human_animations } from '../objects/3D_models/human.js';
import { renderer, scene } from '../main.js';
import { camera, velocityX, velocityY, rotate_camera }  from './camera.js';

export function animate() {    

    // Apply inertia effect (smooth camera rotation)
    if(Math.abs(velocityX) > 0.0001 || Math.abs(velocityY) > 0.0001) {
        rotate_camera(velocityX, velocityY)
        velocityX *= friction
        velocityY *= friction
    }

    // update the model animation
    if (human_animations) {
        human_animations.update(0.01);
    }

    animate_cube();
    animate_arrow();

    renderer.render(scene, camera);  // Rendu de la scène dans chaque frame
}