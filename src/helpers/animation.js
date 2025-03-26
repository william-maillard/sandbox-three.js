import { animate_arrow } from '../basic/arrow.js';
import { animate_cube } from '../basic/cube.js';
import { human_animations } from '../3D_models/human.js';
import { renderer, scene } from '../main.js';
import { camera }  from './camera.js';

export function animate() {
    // update the model animation
    if (human_animations) {
        human_animations.update(0.01);
    }

    animate_cube();
    animate_arrow();

    renderer.render(scene, camera);  // Rendu de la scène dans chaque frame
}