import * as THREE from 'three';

export function initSky(scene) {
    const skyGeometry = new THREE.SphereGeometry(100, 32, 32);
    const loader = new THREE.TextureLoader();

    const texture = loader.load('textures/sky_clouds.jpg');
    const skyMaterial = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.BackSide,
        // transparent: true,
        // opacity: 0.5,
    })
    const sky = new THREE.Mesh(skyGeometry, skyMaterial);
    scene.add(sky);
}