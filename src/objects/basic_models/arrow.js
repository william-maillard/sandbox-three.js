import { 
    Vector3, Line,
    LineBasicMaterial, BufferGeometry
} from 'three';
// Draw an arrow on top of the cube
export const arrow = {
    up : true,
    speed : 0.025,
    material : new LineBasicMaterial(
        { color: 0x0000ff  }
    ),
    geometry : new BufferGeometry().setFromPoints(
        [
            new Vector3( -0.5, 2, 0),
            new Vector3( 0, 1, 0),
            new Vector3( 0.5, 2, 0 )
        ]
    ),
};

arrow.line = new Line(arrow.geometry, arrow.material);

export function animate_arrow() {
    let y = arrow.up ?  arrow.speed : -arrow.speed;
    arrow.line.position.y += y;
    if (arrow.up && arrow.line.position.y >= 3) arrow.up = !arrow.up;
    else if (!arrow.up && arrow.line.position.y <= 0) arrow.up = !arrow.up;
}