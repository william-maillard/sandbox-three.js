import * as THREE from 'three';
import { RubiksColors, RubiksColorsMaterials } from "./colors";
import { RubiksConfiguration } from './RubiksConf';

class RubiksTile {  

    constructor(color, groupTiles) {
        this.color = color;
        this.material = RubiksColorsMaterials[color];
        console.log(this.material);
        this.mesh = new THREE.Mesh(RubiksConfiguration.tileGeometry, this.material);
        // this.mesh.position.set(position.x, position.y, position.z);
        groupTiles.add(this.mesh);
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