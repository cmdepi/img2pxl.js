/**
 *
 * @description Air image processor
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 */
import ImageProcessor from '../../core/processor/image-processor.js';
import Image          from '../util/image.js';
import AirPixel       from '../model/image/item/particle/pixel/air-pixel.js';

export default class AirImageProcessor extends ImageProcessor {
    /**
     *
     * Constructor
     *
     * @param {CanvasRenderingContext2D} context
     * @param {HTMLImageElement}         image
     * @param {Number}                   gap
     *
     * @note Update default gap value. This air effect does not need a full resolution image
     *
     */
    constructor(context, image, gap = 3) {
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
     * @returns {AirPixel}
     *
     */
    processPixel(color, x, y) {
        const data = Image.addBrightnessToPixelColor(color);
        return new AirPixel(data, x, y);
    }
}