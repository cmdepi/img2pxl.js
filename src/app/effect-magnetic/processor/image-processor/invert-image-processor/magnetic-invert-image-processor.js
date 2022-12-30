/**
 *
 * @description Magnetic invert image processor
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 */
import MagneticPixel        from '../../../model/image/item/particle/pixel/magnetic-pixel.js';
import InvertImageProcessor from '../../../../core/processor/image-processor/invert-image-processor.js';

export default class MagneticInvertImageProcessor extends InvertImageProcessor {
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