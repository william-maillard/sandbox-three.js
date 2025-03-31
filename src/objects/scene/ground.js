import * as THREE from 'three';

export function initGround(scene) {
    const planeGeometry = new THREE.PlaneGeometry(10, 10);
    const loader = new THREE.TextureLoader();

    const texture = loader.load('textures/ground_wood.jpg');
    const planeMaterial = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide,
        // transparent: true,
        // opacity: 0.5,
    })
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    scene.add(plane);
}