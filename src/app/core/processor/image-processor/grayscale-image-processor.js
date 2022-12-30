/**
 *
 * @description Grayscale image processor
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 */
import Image          from '../../../../util/image.js';
import ImageProcessor from '../image-processor.js';

export default class GrayscaleImageProcessor extends ImageProcessor {
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
        const color = this.#convertColorToGrayscale(super._getPixelColor(imageData, x, y));
        Image.updateImageDataColor(imageData, x, y, color);
        return color;
    }

    /**
     *
     * Convert color to grayscale
     *
     * @param {{red: Number, green: Number, blue: Number, alpha: Number}} color
     *
     * @returns {{red: Number, green: Number, blue: Number, alpha: Number}}
     *
     */
    #convertColorToGrayscale(color) {
        const avg   = (color.red + color.green + color.blue) / 3;
        color.red   = avg;
        color.green = avg;
        color.blue  = avg;
        return color;
    }
}