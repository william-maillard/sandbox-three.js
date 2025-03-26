import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';
// to load 3D models from glTF files
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import { camera } from './camera.js';
import { cube, animate_cube } from './cube.js';


if(!WebGL.isWebGL2Available()) 
{
    const warning = WebGL.getWebGL2ErrorMessage();
    document.getElementById( 'container').appendChild(warning);
}

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();

// The app take the whole screen
renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

// We add the canvas element of the scene to the page
document.body.appendChild(renderer.domElement);


// by default set it to (0, 0, 0)
scene.add(cube.mesh);



// Draw an arrow on top of the cube
const arrow = {
    dir : [
        new THREE.Vector3(0, 10, 0),
        new THREE.Vector3(0, 2, 0)
    ],
    point_size : 10,
    material : new THREE.LineBasicMaterial(
        { color: 0x0000ff  }
    ),    
}

arrow.geometry = new THREE.BufferGeometry().setFromPoints(
    [
        new THREE.Vector3( -0.5, 2, 0),
        new THREE.Vector3( 0, 1, 0),
        new THREE.Vector3( 0.5, 2, 0 )
    ]
);

arrow.up = true;
arrow.speed = 0.025;

arrow.line = new THREE.Line(arrow.geometry, arrow.material);

function animate_arrow() {
    let y = arrow.up ?  arrow.speed : -arrow.speed;
    arrow.line.position.y += y;
    if (arrow.up && arrow.line.position.y >= 3) arrow.up = !arrow.up;
    else if (!arrow.up && arrow.line.position.y <= 0) arrow.up = !arrow.up;
}

scene.add(arrow.line);

// Add a 3D model bird to teh scene
const loader = new GLTFLoader();

var mixer = undefined;

loader.load(
    // path to the 3D model
    '3D_models/personnage.glb',
    // onload function
    function(gltf) {
        let human = gltf.scene;
        scene.add(human);

        // Set the model position to (0, 5, 0)
        human.position.set(0, 0, 0);
        human.scale.set(1, 1, 1);

        // Extract the model animation if any
        mixer = new THREE.AnimationMixer(human);
        gltf.animations.forEach((clip) => {
            mixer.clipAction(clip).play(); // Play the first animation find
        })
        console.log("Animations found:", gltf.animations.length);
        
        // Iterate over the materials to check for textures
        human.traverse((child) => {
            if (child.isMesh && child.material.map) {
                console.log('Texture applied:', child.material.map);
            }
        });

        console.log(human);
    },
    // onprogress function
    undefined,
    // onerror function
    function(error) {
        console.error(error);
    }
);



// In order to see the textures of the 3D model, we need to add a light
const ambientLight = new THREE.AmbientLight(0xffffff, 1);  // Lumière douce et faible
scene.add(ambientLight);












// Display the scene

function animate() {
    // update the model animation
    if (mixer) {
        mixer.update(0.01);
    }

    animate_cube();
    animate_arrow();

    renderer.render(scene, camera);  // Rendu de la scène dans chaque frame
}

renderer.setAnimationLoop( animate );

// Changer le fond avec une couleur unie
scene.background = new THREE.Color(0x87CEEB);  // Exemple avec une couleur bleu ciel