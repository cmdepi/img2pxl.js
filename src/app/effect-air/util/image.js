/**
 *
 * @description Image utility
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 * @note An utility implementation to be able to work with an image and its pixels
 *
 */
import BaseImageUtil from '../../../util/image.js';

export default class Image extends BaseImageUtil {
    /**
     *
     * Get colors from image data using image pixel coordinates
     *
     * @param {ImageData} imageData
     * @param {Number}    x
     * @param {Number}    y
     *
     * @returns {{red: Number, green: Number, blue: Number, alpha: Number, brightness: Number}}
     *
     * @note Add brightness information
     *
     */
    static getImagePixelColorsFromImageData(imageData, x, y) {
        const color = BaseImageUtil.getImagePixelColorsFromImageData(imageData, x, y);
        return this.addBrightnessToPixelColor(color);
    }

    /**
     *
     * Add brightness to pixel color
     *
     * @param {{red: Number, green: Number, blue: Number, alpha: Number}} color
     *
     * @returns {{red: Number, green: Number, blue: Number, alpha: Number, brightness: Number}}
     *
     */
    static addBrightnessToPixelColor(color) {
        const brightness = this.calcRelativeBrightnessFromPixelColor(color);
        return {...color, brightness: brightness};
    }

    /**
     *
     * Calculate relative pixel brightness considering pixel color
     *
     * @param {{red: Number, green: Number, blue: Number, alpha: Number}} color
     *
     * @returns {Number}
     *
     */
    static calcRelativeBrightnessFromPixelColor(color) {
        const {red, green, blue} = color;
        return Math.sqrt((red * red) * 0.299 + (green * green) * 0.587 + (blue * blue) * 0.114) / 100;
    }
}