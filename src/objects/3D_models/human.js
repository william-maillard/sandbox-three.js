import { AnimationMixer } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { scene } from '../../main.js';

const loader = new GLTFLoader();
export var human_animations = undefined;

loader.load(
    // path to the 3D model
    '3D_models/human.glb',
    // onload function
    function(gltf) {
        let human = gltf.scene;
        scene.add(human);

        // Set the model position to (0, 5, 0)
        human.position.set(0, 0, 0);
        human.scale.set(1, 1, 1);

        // Extract the model animation if any
        human_animations = new AnimationMixer(human);
        gltf.animations.forEach((clip) => {
            human_animations.clipAction(clip).play(); // Play the first animation find
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
        console.error(scene);
    }
);
