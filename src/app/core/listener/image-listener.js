/**
 *
 * @description Image listener
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 */
export default class ImageListener {
    /**
     *
     * @type {HTMLCanvasElement}
     *
     */
    #canvas;

    /**
     *
     * Constructor
     *
     * @param {HTMLCanvasElement} canvas
     *
     */
    constructor(canvas) {
        this.#canvas = canvas;
    }

    /**
     *
     * Add listeners to canvas
     *
     * @param {Pixel[]}   pixels
     * @param {ImageData} imageData
     *
     * @returns {void}
     *
     */
    listen(pixels, imageData) {}
}