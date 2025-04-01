import * as THREE from 'three';
import { RubiksFace } from "./face";
import {RubiksColors } from "./colors";

class RubiksCube {

    static size= 2;
    static baseColor = 0x000000;
    

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

        this.geometry = new THREE.BoxGeometry(RubiksCube.size, RubiksCube.size, RubiksCube.size);
        this.material = new THREE.MeshBasicMaterial({ color: RubiksCube.baseColor });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        // this.mesh.castShadow = true;
        // this.mesh.receiveShadow = true;
        this.mesh.position.set(0, 2, 0);
    }

    drawCube() {
        // TODO
        // maybe make a draw function for RubiksFace and RubiksTile
        // need to keep track of the faces and tiles coordinates among the 3D environment
        return this.mesh;
    }


    rotate(rotationType, direction) {
        // First lets make only cube rotation
        this.mesh.rotation.x += 0.01;
    }
    #rotateLine(i) {}
    #rotateColumn(j) {}
    #rotateCube(i) {}
    
}

export var rubiks = new RubiksCube();
