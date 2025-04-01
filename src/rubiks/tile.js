import { RubiksColors } from "./colors";
import { RubiksMovements } from "./movements";

class RubiksTile {
    constructor(color, position) {
        this.color = color;
        this.position = position; // the position of the tile on the cube face
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    getPosition() {
        return this.position;
    }

    setPosition(position) {
        this.position = position;
    }
}

export { RubiksTile };