/**
 *
 * @description Air invert image processor
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 */
import Image                from '../../util/image.js';
import AirPixel             from '../../model/image/item/particle/pixel/air-pixel.js';
import InvertImageProcessor from '../../../core/processor/image-processor/invert-image-processor.js';

export default class AirInvertImageProcessor extends InvertImageProcessor {
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