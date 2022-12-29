/**
 *
 * @description Pixel
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 * @note A pixel is a particle with RGBA information
 *
 */
import Particle from '../particle.js';

export default class Pixel extends Particle {
    /**
     *
     * @type {{red: Number, green: Number, blue: Number, alpha: Number}}
     *
     * @note Pixel color information
     * @note Every color value (red, green, blue and alpha) could be between 0 and 255 (it has the same range of values utilizes by the ImageData object)
     *
     * @see {ImageData}
     *
     */
    color = {
        'red'  : 0,
        'green': 0,
        'blue' : 0,
        'alpha': 0
    };

    /**
     *
     * Constructor
     *
     * @param {{red: Number, green: Number, blue: Number, alpha: Number}} color
     * @param {Number}                                                    x
     * @param {Number}                                                    y
     * @param {Number}                                                    vx
     * @param {Number}                                                    vy
     * @param {Number}                                                    size
     *
     */
    constructor(color, x = 0, y = 0, vx = 0, vy = 0, size = 1) {
        super(x, y, vx, vy, size);
        this.color = color;
    }
}