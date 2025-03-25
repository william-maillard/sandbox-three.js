import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js'

if(!WebGL.isWebGL2Available()) 
{
    const warning = WebGL.getWebGL2ErrorMessage();
    document.getElementById( 'container').appendChild(warning)
}

const scene = new THREE.Scene();

// There are differend kind of camera, 
// This one allow us to set a point of view
// to look from
const camera = new THREE.PerspectiveCamera(
    75, // Field Of View in degree
    window.innerWidth / window.innerHeight, // aspect ration
    0.1, // near clipping
    1000 // far clipping
);

const renderer = new THREE.WebGLRenderer();

// The app take the whole screen
renderer.setSize(
    window.innerWidth,
    window.innerHeight
)

// We add the canvas element of the scene to the page
document.body.appendChild(renderer.domElement)


// Great, now everithing is setup
// Let's make our cube !

// contain all vertices and fill faces
const geometry= new THREE.BoxGeometry(1, 1, 1)

// To customise the cube
const material = new THREE.MeshBasicMaterial( 
    {color: 0x00ff00}
)

// apply the material on a geometric figure
const cube = new THREE.Mesh(
    geometry, material
)

// by default set it to (0, 0, 0)
scene.add(cube)

camera.position.z = 5


// Now we need to render the cube on the screen
function animate() {

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(
        scene, camera
    )
}

renderer.setAnimationLoop( animate )

