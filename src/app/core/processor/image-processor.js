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
     * @param {Number}                   gap
     *
     */
    constructor(context, gap = 1) {
        this.#context = context;
        this.#gap     = gap;
    }

    /**
     *
     * Process image data to create related pixels
     *
     * @param {HTMLImageElement} image
     *
     * @returns {{imageData: ImageData, pixels: Pixel[]}}
     *
     */
    process(image) {
        /**
         *
         * @note Init pixels
         *
         */
        const pixels = [];

        /**
         *
         * @note Init image data
         *
         */
        const imageData = this.#initImageData(image);

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
     * Init image data
     *
     * @param {HTMLImageElement} image
     *
     * @returns {ImageData}
     *
     * @note Get image data and then remove image from canvas
     *
     */
    #initImageData(image) {
        this.#context.drawImage(image, 0, 0, image.width, image.height);
        const imageData = this.#context.getImageData(0, 0, image.width, image.height);
        this.#context.clearRect(0, 0, image.width, image.height);
        return imageData;
    }
}