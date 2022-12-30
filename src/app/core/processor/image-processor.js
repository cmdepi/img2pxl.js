/**
 *
 * @description Image processor
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 */
import Image from '../../../util/image.js';
import Pixel from '../../core/model/image/particle/pixel.js';

export default class ImageProcessor {
    /**
     *
     * @type {CanvasRenderingContext2D} context
     *
     * @protected
     *
     */
    _context;

    /**
     *
     * @type {HTMLImageElement}
     *
     */
    #image;

    /**
     *
     * @type {Number}
     *
     * @note This attribute is used to have a flexibility about the pixels processed and effect performance
     *
     */
    #gap

    /**
     *
     * Constructor
     *
     * @param {CanvasRenderingContext2D} context
     * @param {HTMLImageElement}         image
     * @param {Number}                   gap
     *
     */
    constructor(context, image, gap = 1) {
        this._context = context;
        this.#image   = image;
        this.#gap     = gap;
    }

    /**
     *
     * Process image
     *
     * @returns {{imageData: ImageData, pixels: Pixel[]}}
     *
     */
    process() {
        /**
         *
         * @note Init pixels
         *
         */
        const pixels = [];

        /**
         *
         * @note Create image data
         *
         */
        const imageData = this._createImageData();

        /**
         *
         * @note Loop image rows
         *
         */
        for (let y = 0; y < imageData.height; y++) {
            /**
             *
             * @note Loop image columns
             *
             */
            for (let x = 0; x < imageData.width; x++) {
                /**
                 *
                 * @note Process pixel color
                 *
                 */
                const color = this._processPixelColor(imageData, x, y);

                /**
                 *
                 * @note By default, avoid processing transparent pixels
                 * @note Gap validation is used here instead of before pixel color processing because pixel color processing could also modify the image information to be used in rendering, and it is important that this information is adjusted so that it maintains values consistent with that of the generated pixels
                 *
                 */
                if ((!((x + 1) % this.#gap)) && (color.alpha > 0)) {
                    /**
                     *
                     * @note Process pixel
                     *
                     */
                    pixels.push(this._processPixel(color, x, y));
                }
            }
        }

        /**
         *
         * @note Return processed data
         *
         */
        return {imageData: imageData, pixels: pixels};
    }

    /**
     *
     * Process pixel color
     *
     * @param {ImageData} imageData
     * @param {Number}    x
     * @param {Number}    y
     *
     * @returns {{red: Number, green: Number, blue: Number, alpha: Number}}
     *
     * @protected
     *
     * @note This method was implemented to add the possibility of customizing the color of the pixel
     * @note This method also could update the image data
     * @note It is used only this method to process the image data and generate the pixel color to avoid the implementation of an extra loop that only process the image data
     *
     */
    _processPixelColor(imageData, x, y) {
        return Image.getImagePixelColorsFromImageData(imageData, x, y);
    }

    /**
     *
     * Process pixel
     *
     * @param {{red: Number, green: Number, blue: Number, alpha: Number}} color
     * @param {Number}                                                    x
     * @param {Number}                                                    y
     *
     * @returns {Pixel}
     *
     * @protected
     *
     * @note This method was implemented to add the possibility of customizing the pixel processing
     *
     */
    _processPixel(color, x, y) {
        return new Pixel(color, x, y);
    }

    /**
     *
     * Create image data
     *
     * @returns {ImageData}
     *
     * @protected
     *
     * @note Get image data and then remove image from canvas
     *
     */
    _createImageData() {
        this._context.drawImage(this.#image, 0, 0, this.#image.width, this.#image.height);
        const imageData = this._context.getImageData(0, 0, this.#image.width, this.#image.height);
        this._context.clearRect(0, 0, this.#image.width, this.#image.height);
        return imageData;
    }
}