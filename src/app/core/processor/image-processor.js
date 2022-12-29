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
     * {CanvasRenderingContext2D} context
     *
     */
    #context;

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
        this.#context = context;
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
        const imageData = this.#createImageData();

        /**
         *
         * @note Loop image rows
         *
         */
        for (let y = 0; y < imageData.height; y += this.#gap) {
            /**
             *
             * @note Loop image columns
             *
             */
            for (let x = 0; x < imageData.width; x += this.#gap) {
                /**
                 *
                 * @note Get pixel color
                 *
                 */
                const color = Image.getImagePixelColorsFromImageData(imageData, x, y);

                /**
                 *
                 * @note By default, avoid processing transparent pixels
                 *
                 */
                if (color.alpha > 0) {
                    /**
                     *
                     * @note Process pixel
                     *
                     */
                    pixels.push(this.processPixel(color, x, y));
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
     * Process pixel
     *
     * @param {{red: Number, green: Number, blue: Number, alpha: Number}} color
     * @param {Number}                                                    x
     * @param {Number}                                                    y
     *
     * @returns {Pixel}
     *
     * @note This method was implemented to add the possibility of customizing the pixel processing
     *
     */
    processPixel(color, x, y) {
        return new Pixel(color, x, y);
    }

    /**
     *
     * Create image data
     *
     * @returns {ImageData}
     *
     * @note Get image data and then remove image from canvas
     *
     */
    #createImageData() {
        this.#context.drawImage(this.#image, 0, 0, this.#image.width, this.#image.height);
        const imageData = this.#context.getImageData(0, 0, this.#image.width, this.#image.height);
        this.#context.clearRect(0, 0, this.#image.width, this.#image.height);
        return imageData;
    }
}