import { RubiksColors } from "./colors";

export class RubiksFace {
    constructor(tiles) {
        this.tiles = tiles;
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