/**
 *
 * @description Air image processor
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 */
import Image          from '../../util/image.js';
import AirPixel       from '../../model/image/item/particle/pixel/air-pixel.js';
import ImageProcessor from '../../../core/processor/image-processor.js';

export default class AirImageProcessor extends ImageProcessor {
    /**
     *
     * Process pixel
     *
     * @param {{red: Number, green: Number, blue: Number, alpha: Number}} color
     * @param {Number}                                                    x
     * @param {Number}                                                    y
     *
     * @returns {AirPixel}
     *
     * @protected
     *
     */
    _processPixel(color, x, y) {
        return new AirPixel(Image.addBrightnessToPixelColor(color), x, y);
    }
}