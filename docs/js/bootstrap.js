/**
 *
 * @description Bootstrap
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 */
import Image2Pixel         from '../../src/image2pixel.js';
import RandomObjectManager from './bootstrap/random-object-manager.js';

export default class Bootstrap {
    /**
     *
     * @type {(Image2Pixel|null)}
     *
     */
    #animation = null;

    /**
     *
     * @type {RandomObjectManager}
     *
     */
    #randomObjectManager

    /**
     *
     * Constructor
     *
     * @param {String} canvasId
     * @param {String} canvasBackgroundColor
     *
     */
    constructor(canvasId, canvasBackgroundColor) {
        this.#initDocument(canvasBackgroundColor);
        this.#initRandomObjectManager(canvasId, canvasBackgroundColor);
    }

    /**
     *
     * Run
     *
     * @returns {void}
     *
     */
    run() {
        /**
         *
         * @note Check if there is an animation already running
         *
         */
        if (this.#animation) {
            /**
             *
             * @note Cancel animation
             *
             */
            this.#animation.cancelAnimation();
        }

        /**
         *
         * @note Init animation
         *
         */
        this.#initAnimation();
    }

    /**
     *
     * Init animation
     *
     * @returns {void}
     *
     */
    #initAnimation() {
        this.#animation = new Image2Pixel(this.#randomObjectManager.create());
    }

    /**
     *
     * Init random object manager
     *
     * @param {String} canvasId
     * @param {String} canvasBackgroundColor
     *
     * @returns {void}
     *
     */
    #initRandomObjectManager(canvasId, canvasBackgroundColor) {
        this.#randomObjectManager = new RandomObjectManager(canvasId, canvasBackgroundColor);
    }

    /**
     *
     * Init document
     *
     * @param {String} canvasBackgroundColor
     *
     * @returns {void}
     *
     */
    #initDocument(canvasBackgroundColor) {
        document.body.style.backgroundColor = canvasBackgroundColor;
    }
}

