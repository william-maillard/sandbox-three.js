import * as THREE from 'three';

export const RubiksColors =  Object.freeze({
    WHITE: 0xFFFFFF,
    YELLOW: 0xFFD500,
    RED: 0xC41E3A,
    ORANGE: 0xFF5800,
    BLUE: 0x0051BA,
    GREEN: 0x009E60
});

export const RubiksColorsMaterials =Object.freeze({
    WHITE: new THREE.MeshBasicMaterial({ color: RubiksColors.WHITE }),
    YELLOW: new THREE.MeshBasicMaterial({ color: RubiksColors.YELLOW }),
    RED: new THREE.MeshBasicMaterial({ color: RubiksColors.RED }),
    ORANGE: new THREE.MeshBasicMaterial({ color: RubiksColors.ORANGE }),
    BLUE: new THREE.MeshBasicMaterial({ color: RubiksColors.BLUE }),
    GREEN: new THREE.MeshBasicMaterial({ color: RubiksColors.GREEN })
})
