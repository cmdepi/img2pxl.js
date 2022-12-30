/**
 *
 * @description Bootstrap
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 */
import Image2Pixel         from 'https://cdn.jsdelivr.net/gh/cmdepi/image2pixel.js@master/src/image2pixel.js';
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
        this.#initEventListeners();
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
     * @returns {void}
     *
     */
    #initEventListeners() {
        const airEffectBtn      = document.getElementById('air_effect_btn');
        const magneticEffectBtn = document.getElementById('magnetic_effect_btn');
        airEffectBtn.addEventListener('click', (event) => {
            event.preventDefault();
            this.run('air');
        })
        magneticEffectBtn.addEventListener('click', (event) => {
            event.preventDefault();
            this.run('magnetic');
        })
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

