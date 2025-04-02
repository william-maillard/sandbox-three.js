import * as THREE from 'three';
import { RubiksFace } from "./face";
import {RubiksColors } from "./colors";
import { RubiksTile } from "./tile";
import { RubiksConfiguration } from './RubiksConf';

class RubiksCube {
    constructor() {
        // TODO
        this.faces = [];
        let tiles = [];

        // Container for the rubiksCube display
        this.RubiksCubeTiles = new THREE.Group();
        this.RubiksCubeTiles.position.set(0, 2, 0);

        this.drawDebugCube();

        // First create the tiles of the cube in all the colors
        for (const color in RubiksColors) {
            for (let i = 0; i < RubiksConfiguration.nbTilesPerFace; i++) {
                tiles.push(new RubiksTile(color, this.RubiksCubeTiles));
            }
        }
        let shuffledTiles = tiles.sort(() => Math.random() - 0.5);

        // Now create the faces of the cube and asign randomly the tiles to the faces
        let n=0;
        for( let i=0; i< RubiksConfiguration.nbTilesPerFace; i++) {
            let face = shuffledTiles.slice(i * RubiksConfiguration.nbTilesPerFace, (i + 1) * RubiksConfiguration.nbTilesPerFace);
            this.faces.push(new RubiksFace(face, n));
            n++;
        }


        // add a cube inside
        const tile_size = RubiksConfiguration.size / RubiksConfiguration.nbTilesPerFace;
        const tileGeometry = new THREE.BoxGeometry(tile_size, tile_size, tile_size);
        const tileMaterial = new THREE.MeshBasicMaterial({ color: RubiksConfiguration.baseColor });
        const tiles_1 = new RubiksTile(RubiksColors.RED, this.RubiksCubeTiles); 
        this.RubiksCubeTiles.add(tiles_1.mesh);
        const tiles_2 = new RubiksTile(RubiksColors.GREEN, this.RubiksCubeTiles);
        this.RubiksCubeTiles.add(tiles_2.mesh); 
        tiles_2.setPosition({x: 0, y: 0, z: tile_size});
    }

    drawDebugCube() {
        // Create the main cube 
        this.geometry = new THREE.BoxGeometry(RubiksConfiguration.size, RubiksConfiguration.size, RubiksConfiguration.size);
        this.material = new THREE.MeshBasicMaterial({ color: RubiksColors.RED });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.set(0, 0, 0);
        this.mesh.material.transparent = true;
        this.mesh.material.opacity = 0.5;
        this.RubiksCubeTiles.add(this.mesh);
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
