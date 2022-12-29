/**
 *
 * @description Image2Pixel
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 */
export default class Image2Pixel {
    /**
     *
     * @type {ImageBuilder}
     *
     */
    #imageBuilder;

    /**
     *
     * Constructor
     *
     * @param {ImageBuilder} imageBuilder
     *
     */
    constructor(imageBuilder) {
        this.#imageBuilder = imageBuilder;
        this.#run();
    }

    /**
     *
     * Run effect
     *
     * @returns {void}
     *
     */
    #run() {
        /**
         *
         * @note Wait for image to be loaded to run effect without problems
         *
         */
        let self = this;
        self.#imageBuilder.image.onload = function() {
            /**
             *
             * @note Init canvas
             *
             */
            self.#initCanvas();

            /**
             *
             * @note Process image
             *
             */
            const {imageData, pixels} = self.#processImage();

            /**
             *
             * @note Add listeners
             *
             */
            self.#addListeners(pixels, imageData);

            /**
             *
             * @note Animate
             *
             */
            self.#animate(pixels, imageData);
        }
    }

    /**
     *
     * Animate
     *
     * @params {Pixel[]}   pixels
     * @params {ImageData} imageData
     *
     * @returns {void}
     *
     */
    #animate(pixels, imageData) {
        this.#imageBuilder.imageRenderer.render(pixels, imageData);
        requestAnimationFrame(this.#animate.bind(this, pixels, imageData));
    }

    /**
     *
     * Add listeners
     *
     * @params {Pixel[]}   pixels
     * @params {ImageData} imageData
     *
     * @returns {void}
     *
     */
    #addListeners(pixels, imageData) {
        this.#imageBuilder.imageListener.listen(pixels, imageData);
    }

    /**
     *
     * Process image data
     *
     * @returns {{imageData: ImageData, pixels: Pixel[]}}
     *
     */
    #processImage() {
        return this.#imageBuilder.imageProcessor.process();
    }

    /**
     *
     * Init canvas
     *
     * @returns {void}
     *
     * @note Set image dimensions as canvas dimensions
     *
     */
    #initCanvas() {
        this.#imageBuilder.canvas.width  = this.#imageBuilder.image.width;
        this.#imageBuilder.canvas.height = this.#imageBuilder.image.height;
    }
}