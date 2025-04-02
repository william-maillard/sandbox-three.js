import { RubiksColors } from "./colors";
import { RubiksConfiguration } from './RubiksConf';

export class RubiksFace {
    constructor(tiles, number) {
        this.number = number;
        this.tiles = tiles;
        // modify the position of tiles amongs the face
        let middle = RubiksConfiguration.nbTilesPerFace / 2;
        let i = 0;
        let j = 0;
        for(let tile of this.tiles) {
            tile.setPosition({
                x: (i - 1) * RubiksConfiguration.tileSize, 
                y: j * RubiksConfiguration.tileSize, 
                z: this.number * RubiksConfiguration.tileSize
            });
            i++;
            if (i > middle) {
                i = -middle;
                j++;
            }
        }
        this.color = null;
        this.isFilled();
    }

    isFilled() {
        const firstColor = this.tiles[0].getColor();
        for (let i = 1; i < this.tiles.length; i++) {
            if (this.tiles[i].getColor() !== firstColor) {
                this.color = null;
                return false;
            }
        }
        this.color = firstColor;
        return true;
    }
}