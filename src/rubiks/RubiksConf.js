import * as THREE from 'three';

const RubiksConfiguration = {
    size: 2,
    baseColor:0x00000,
    nbTilesPerFace: 6,
    TilesOffset: 0.1,
};

RubiksConfiguration.tileSize = RubiksConfiguration.size / RubiksConfiguration.nbTilesPerFace;
RubiksConfiguration.tileGeometry = new THREE.BoxGeometry(RubiksConfiguration.tileSize, RubiksConfiguration.tileSize, RubiksConfiguration.tileSize);

export { RubiksConfiguration };
