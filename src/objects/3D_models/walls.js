import { AnimationMixer } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export function load_walls(scene) {
    const loader = new GLTFLoader();

    loader.load(
        '3D_models/black_wall.glb',
        function(gltf) {
            let wall = gltf.scene;
            scene.add(wall);
    
            wall.position.set(0, -50, -1000);
            wall.rotation.y = Math.PI;
            wall.scale.set(1, 0.25, 1);
    
            console.log(wall);
        },
        undefined,
        function(error) {
            console.error('Error loading walls.')
            console.error(error);
            console.error(scene);
        }
    );
}
