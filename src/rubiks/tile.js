import * as THREE from 'three';
import { RubiksColors, RubiksColorsMaterials } from "./colors";
import { RubiksCube } from "./rubiksCube";

class RubiksTile {
    static tile_size = RubiksCube.size / RubiksCube.nbTilesPerFace;
    static geometry = new THREE.BoxGeometry(tile_size, tile_size, tile_size);
    

    constructor(color, position) {
        this.color = color;
        this.material = RubiksColorsMaterials[color];
        this.mesh = new THREE.Mesh(RubiksTile.geometry, this.material);
        this.mesh.position.set(position.x, position.y, position.z);
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
        this.material = RubiksColorsMaterials[color];
        this.mesh.material = this.material;
        this.mesh.material.needsUpdate = true; 
    }

    getPosition() {
        return this.position;
    }

    setPosition(position) {
        this.position = position;
        this.mesh.position.set(position.x, position.y, position.z);
        this.mesh.updateMatrixWorld();
    }
}

export { RubiksTile };