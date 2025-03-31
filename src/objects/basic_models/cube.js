
import { BoxGeometry, MeshBasicMaterial, Mesh } from "three";
// Great, now everithing is setup
// Let's make our cube !
export var cube = {};

// contain all vertices and fill faces
cube.geometry= new BoxGeometry(1, 1, 1);

// To customise the cube
cube.material = new MeshBasicMaterial( 
    {color: 0x00ff00}
);

// apply the material on a geometric figure
cube.mesh = new Mesh(
    cube.geometry, cube.material
);

export function animate_cube() {

    cube.mesh.rotation.x += 0.01;
    cube.mesh.rotation.y += 0.01;
}