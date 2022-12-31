/**
 *
 * @description Bootstrap
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 */
import Image2Pixel         from 'https://cdn.jsdelivr.net/gh/cmdepi/image2pixel.js@master/src/image2pixel.js';
import RandomObjectManager from './app/core/random-object-manager.js';

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
     * @param {String}                         canvasId
     * @param {String}                         canvasBackgroundColor
     * @param {[{id: String, effect: String}]} buttons
     *
     */
    constructor(canvasId, canvasBackgroundColor, buttons) {
        this.#initDocument(canvasBackgroundColor);
        this.#initRandomObjectManager(canvasId, canvasBackgroundColor);
        this.#initEventListeners(buttons);
        this.#initAnimation();
    }

    /**
     *
     * Run
     *
     * @param {String} effect
     *
     * @returns {void}
     *
     */
    run(effect) {
        this.#animation.cancelAnimation();
        this.#createAnimation(this.#randomObjectManager.createFromEffect(effect));
    }

    /**
     *
     * Init animation
     *
     * @returns {void}
     *
     */
    #initAnimation() {
        this.#createAnimation(this.#randomObjectManager.create());
    }

    /**
     *
     * Init event listeners
     *
     * @param {[{id: String, effect: String}]} buttons
     *
     * @returns {void}
     *
     */
    #initEventListeners(buttons) {
        buttons.forEach((button) => {
            const buttonElement = document.getElementById(button.id);
            buttonElement.addEventListener('click', (event) => {
                event.preventDefault();
                this.run(button.effect);
            });
        });
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

    /**
     *
     * Create animation
     *
     * @param {(MagneticGrayscaleImageBuilder|AirInvertImageBuilder|AirGrayscaleImageBuilder|AirImageBuilder|MagneticImageBuilder|MagneticInvertImageBuilder)} imageBuilder
     *
     * @returns {void}
     *
     */
    #createAnimation(imageBuilder) {
        this.#animation = new Image2Pixel(imageBuilder);
    }
}

