import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';
import { cube } from './objects/basic_models/cube.js';
import { arrow } from './objects/basic_models/arrow.js';
import { animate } from './helpers/animation.js';
import { setup_inputs_handler } from './helpers/inputs_handler.js';
import { load_walls } from './objects/3D_models/walls.js';


if(!WebGL.isWebGL2Available()) 
{
    const warning = WebGL.getWebGL2ErrorMessage();
    document.getElementById( 'container').appendChild(warning);
}

export const scene = new THREE.Scene();
export const renderer = new THREE.WebGLRenderer();

// The app take the whole screen
renderer.setSize(window.innerWidth, window.innerHeight);
// We add the canvas element of the scene to the page
document.body.appendChild(renderer.domElement);

// by default set it to (0, 0, 0)
scene.add(cube.mesh);
scene.add(arrow.line);

// In order to see the textures of the 3D model, we need to add a light
const ambientLight = new THREE.AmbientLight(0xffffff, 1);  // Lumière douce et faible
scene.add(ambientLight);
renderer.setAnimationLoop( animate );

// Changer le fond avec une couleur unie
scene.background = new THREE.Color(0x87CEEB);  // Exemple avec une couleur bleu ciel


setup_inputs_handler();
load_walls(scene);
