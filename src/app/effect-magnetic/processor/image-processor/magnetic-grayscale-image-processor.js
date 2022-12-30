/**
 *
 * @description Magnetic grayscale image processor
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 */
import MagneticPixel           from '../../model/image/item/particle/pixel/magnetic-pixel.js';
import GrayscaleImageProcessor from '../../../core/processor/image-processor/grayscale-image-processor.js';

export default class MagneticGrayscaleImageProcessor extends GrayscaleImageProcessor {
    /**
     *
     * Process pixel
     *
     * @param {{red: Number, green: Number, blue: Number, alpha: Number}} color
     * @param {Number}                                                    x
     * @param {Number}                                                    y
     *
     * @returns {MagneticPixel}
     *
     * @protected
     *
     */
    _processPixel(color, x, y) {
        return new MagneticPixel(color, x, y);
    }
}