import * as THREE from 'three';
import { RubiksFace } from "./face";
import {RubiksColors } from "./colors";
import { RubiksTile } from "./tile";

class RubiksCube {

    static size= 2;
    static baseColor = 0x000000;
    static nbTilesPerFace = 6;
    static TilesOffset = 0.1;
    

    constructor() {
        // TODO
        this.faces = [];
        const tiles = [];
        // for (const color in RubiksColors) {
        //     for (let i = 0; i < 6; i++) {
        //     tiles.push({ color });
        //     }
        // }
        // this.shuffledTiles = tiles.sort(() => Math.random() - 0.5);
        // for (const color in RubiksColors) {
        //     this.faces.push(new RubiksFace(this.createFace(color)));
        // }
        this.RubiksCubeTiles = new THREE.Group();
        // define the world coordinates of the group
        this.RubiksCubeTiles.position.set(0, 2, 0);

        // Create the main cube 
        this.geometry = new THREE.BoxGeometry(RubiksCube.size, RubiksCube.size, RubiksCube.size);
        this.material = new THREE.MeshBasicMaterial({ color: RubiksColors.RED });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        // this.mesh.castShadow = true;
        // this.mesh.receiveShadow = true;
        this.mesh.position.set(0, 0, 0);
        // make half the cube transparent
        this.mesh.material.transparent = true;
        this.mesh.material.opacity = 0.5;
        this.RubiksCubeTiles.add(this.mesh);


        // add a cube inside
        const tile_size = RubiksCube.size / RubiksCube.nbTilesPerFace;
        const tileGeometry = new THREE.BoxGeometry(tile_size, tile_size, tile_size);
        const tileMaterial = new THREE.MeshBasicMaterial({ color: RubiksCube.baseColor });
        const tiles_1 = new RubiksTile(RubiksColors.RED, { x: 0, y: 0, z: 0 }); 
        this.RubiksCubeTiles.add(tiles_1.mesh);
        const tiles_2 = new RubiksTile(RubiksColors.GREEN, { x: 0, y: 0, z: 0 });
        this.RubiksCubeTiles.add(tiles_2.mesh); 
    }

    drawCube() {
        // TODO
        // maybe make a draw function for RubiksFace and RubiksTile
        // need to keep track of the faces and tiles coordinates among the 3D environment
        return this.RubiksCubeTiles;
    }


    rotate(rotationType, direction) {
        // First lets make only cube rotation
        // this.mesh.rotation.x += 0.01;
        this.RubiksCubeTiles.rotation.x += 0.01;
    }
    #rotateLine(i) {}
    #rotateColumn(j) {}
    #rotateCube(i) {}
    
}

export { RubiksCube };
export var rubiks = new RubiksCube();
