import * as THREE from 'three';
import { ThreeMFLoader } from 'three/examples/jsm/Addons.js';

export function initBackground(scene) {
    const PlaneGeometry = new THREE.PlaneGeometry(100, 100);
    const loader = new THREE.TextureLoader();

    const texture = loader.load('textures/bg_mountain.jpg', (texture) => {
        // texture.wrapS = THREE.RepeatWrapping;
        // texture.wrapT = THREE.RepeatWrapping;
        // texture.repeat.set(10, 10);
    });

    const Material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide,
    });
    const plane = new THREE.Mesh(PlaneGeometry, Material);
    // ajust the z position of the plane
    plane.rotation.y = Math.PI / 2;
    plane.position.x = -50;

    scene.add(plane);
}