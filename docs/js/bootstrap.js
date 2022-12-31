/**
 *
 * @description Bootstrap
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 */
import Image2Pixel   from 'https://cdn.jsdelivr.net/gh/cmdepi/image2pixel.js@master/src/image2pixel.js';
import ObjectManager from './app/core/object-manager.js';

export default class Bootstrap {
    /**
     *
     * @type {(Image2Pixel|null)}
     *
     */
    #animation = null;

    /**
     *
     * @type {ObjectManager}
     *
     */
    #objectManager

    /**
     *
     * Constructor
     *
     * @param {String}                         canvasId
     * @param {String}                         canvasBackgroundColor
     * @param {[{id: String, effect: String}]} effectButtons
     *
     */
    constructor(canvasId, canvasBackgroundColor, effectButtons) {
        this.#initDocument(canvasBackgroundColor);
        this.#initObjectManager(canvasId, canvasBackgroundColor);
        this.#initEffectEventListeners(effectButtons);
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
        this.#createAnimation(this.#objectManager.createFromEffect(effect));
    }

    /**
     *
     * Init animation
     *
     * @returns {void}
     *
     */
    #initAnimation() {
        this.#createAnimation(this.#objectManager.create());
    }

    /**
     *
     * Init effect event listeners
     *
     * @param {[{id: String, effect: String}]} effectButtons
     *
     * @returns {void}
     *
     */
    #initEffectEventListeners(effectButtons) {
        effectButtons.forEach((button) => {
            const buttonElement = document.getElementById(button.id);
            buttonElement.addEventListener('click', (event) => {
                event.preventDefault();
                this.run(button.effect);
            });
        });
    }

    /**
     *
     * Init object manager
     *
     * @param {String} canvasId
     * @param {String} canvasBackgroundColor
     *
     * @returns {void}
     *
     */
    #initObjectManager(canvasId, canvasBackgroundColor) {
        this.#objectManager = new ObjectManager(canvasId, canvasBackgroundColor);
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

