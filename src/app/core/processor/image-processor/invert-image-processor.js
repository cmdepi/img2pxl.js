/**
 *
 * @description Invert image processor
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 */
import ImageProcessor from '../image-processor.js';

export default class InvertImageProcessor extends ImageProcessor {
    /**
     *
     * Get pixel color
     *
     * @param {ImageData} imageData
     * @param {Number}    x
     * @param {Number}    y
     *
     * @returns {{red: Number, green: Number, blue: Number, alpha: Number}}
     *
     * @protected
     *
     */
    _getPixelColor(imageData, x, y) {
        const color = super._getPixelColor(imageData, x, y);
        return this.#convertColorToInvert(color);
    }

    /**
     *
     * Convert color to invert
     *
     * @param {{red: Number, green: Number, blue: Number, alpha: Number}} color
     *
     * @returns {{red: Number, green: Number, blue: Number, alpha: Number}}
     *
     */
    #convertColorToInvert(color) {
        color.red   = 255 - color.red ;
        color.green = 255 - color.green;
        color.blue  = 255 - color.blue;
        return color;
    }
}