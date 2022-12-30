/**
 *
 * @description Magnetic image processor
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 */
import ImageProcessor from '../../../core/processor/image-processor.js';
import MagneticPixel  from '../../model/image/item/particle/pixel/magnetic-pixel.js';

export default class MagneticImageProcessor extends ImageProcessor {
    /**
     *
     * Constructor
     *
     * @param {CanvasRenderingContext2D} context
     * @param {HTMLImageElement}         image
     * @param {Number}                   gap
     *
     * @note Update default gap value. This magnetic effect does not need a full resolution image
     *
     */
    constructor(context, image, gap = 2) {
        super(context, image, gap);
    }

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