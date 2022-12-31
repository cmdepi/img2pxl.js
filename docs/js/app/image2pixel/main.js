/**
 *
 * @description Entry point for image2pixel.js feature
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 */
import Image2Pixel   from 'https://cdn.jsdelivr.net/gh/cmdepi/image2pixel.js@master/src/image2pixel.js';
import ObjectManager from './util/object-manager.js';

export default class Main {
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
     * @param {String} canvasId
     * @param {String} canvasBackgroundColor
     *
     */
    constructor(canvasId, canvasBackgroundColor) {
        this.#initObjectManager(canvasId, canvasBackgroundColor);
    }

    /**
     *
     * Run animation
     *
     * @param {String|null}                                       effect
     * @param {String|null}                                       mode
     * @param {{src: String, width: Number, height: Number}|null} idol
     *
     * @returns {void}
     *
     */
    run(effect = null, mode = null, idol = null) {
        this.stop();
        this.#createAnimation(this.#objectManager.create(effect, mode, idol));
    }

    /**
     *
     * Stop executing animation
     *
     * @returns {void}
     *
     */
    stop() {
        if (this.#animation) {
            this.#animation.cancelAnimation();
        }
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
}

