/**
 *
 * @description Bootstrap
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 */
import PixelEffect from './app/image2pixel/main.js';

export default class Bootstrap {
    /**
     *
     * @type {PixelEffect}
     *
     */
    #pixelEffect;

    /**
     *
     * Constructor
     *
     * @param {String}                         canvasId
     * @param {String}                         canvasBackgroundColor
     * @param {[{id: String, effect: String}]} pixelEffectButtons
     *
     */
    constructor(canvasId, canvasBackgroundColor, pixelEffectButtons) {
        this.#initDocument(canvasBackgroundColor);
        this.#initPixelEffect(canvasId, canvasBackgroundColor);
        this.#initPixelEffectEventListeners(pixelEffectButtons);
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
        this.#pixelEffect.run();
    }

    /**
     *
     * Init pixel effect event listeners
     *
     * @param {[{id: String, effect: String}]} pixelEffectButtons
     *
     * @returns {void}
     *
     */
    #initPixelEffectEventListeners(pixelEffectButtons) {
        pixelEffectButtons.forEach((button) => {
            const buttonElement = document.getElementById(button.id);
            buttonElement.addEventListener('click', (event) => {
                event.preventDefault();
                this.#pixelEffect.run(button.effect);
            });
        });
    }

    /**
     *
     * Init image2pixel.js effect
     *
     * @param {String} canvasId
     * @param {String} canvasBackgroundColor
     *
     * @returns {void}
     *
     */
    #initPixelEffect(canvasId, canvasBackgroundColor) {
        this.#pixelEffect = new PixelEffect(canvasId, canvasBackgroundColor);
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

