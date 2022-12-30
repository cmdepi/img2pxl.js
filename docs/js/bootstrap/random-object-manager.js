/**
 *
 * @description Random object manager
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 */
import MagneticImageBuilder          from '../../../src/app/effect-magnetic/builder/image-builder/magnetic-image-builder.js';
import MagneticGrayscaleImageBuilder from '../../../src/app/effect-magnetic/builder/image-builder/magnetic-image-builder/magnetic-grayscale-image-builder.js';
import MagneticInvertImageBuilder    from '../../../src/app/effect-magnetic/builder/image-builder/magnetic-image-builder/magnetic-invert-image-builder.js';
import AirImageBuilder               from '../../../src/app/effect-air/builder/image-builder/air-image-builder.js';
import AirGrayscaleImageBuilder      from '../../../src/app/effect-air/builder/image-builder/air-image-builder/air-grayscale-image-builder.js';
import AirInvertImageBuilder         from '../../../src/app/effect-air/builder/image-builder/air-image-builder/air-invert-image-builder.js';

export default class RandomObjectManager {
    /**
     *
     * @type {String[]}
     *
     */
    #effects = [
        'magnetic',
        'air'
    ];

    /**
     *
     * @type {String[]}
     *
     */
    #modes = [
        'normal',
        'grayscale',
        'invert'
    ];

    /**
     *
     * @type {[{src: String, width: Number, height: Number}, {src: String, width: Number, height: Number}, {src: String, width: Number, height: Number}, {src: String, width: Number, height: Number}]}
     *
     */
    #idols = [
        {
            src   : 'images/idols/diegote.png',
            width : 668,
            height: 373
        },
        {
            src   : 'images/idols/garry.png',
            width : 400,
            height: 400
        },
        {
            src   : 'images/idols/magnusette.png',
            width : 400,
            height: 400
        },
        {
            src   : 'images/idols/messias.png',
            width : 540,
            height: 405
        }
    ];

    /**
     *
     * @type {String}
     *
     */
    #canvasId;

    /**
     *
     * @type {String}
     *
     */
    #canvasBackgroundColor;

    /**
     *
     * Constructor
     *
     * @param {String} canvasId
     * @param {String} canvasBackgroundColor
     *
     */
    constructor(canvasId, canvasBackgroundColor) {
        this.#canvasId              = canvasId;
        this.#canvasBackgroundColor = canvasBackgroundColor;
    }

    /**
     *
     * Create
     *
     * @returns {(MagneticGrayscaleImageBuilder|AirInvertImageBuilder|AirGrayscaleImageBuilder|AirImageBuilder|MagneticImageBuilder|MagneticInvertImageBuilder)}
     *
     */
    create() {
        const effect = this.#getRandomEffect();
        const mode   = this.#getRandomMode();
        const idol   = this.#getRandomIdol();
        return this.#createBuilder(effect, mode, idol);
    }

    /**
     *
     * Create builder
     *
     * @param {String}                                       effect
     * @param {String}                                       mode
     * @param {{src: String, width: Number, height: Number}} idol
     *
     * @returns {(MagneticGrayscaleImageBuilder|AirInvertImageBuilder|AirGrayscaleImageBuilder|AirImageBuilder|MagneticImageBuilder|MagneticInvertImageBuilder)}
     *
     */
    #createBuilder(effect, mode, idol) {
        if (effect === 'magnetic' && mode === 'normal') {
            return new MagneticImageBuilder(idol, this.#canvasId, null, this.#canvasBackgroundColor);
        }
        if (effect === 'magnetic' && mode === 'grayscale') {
            return new MagneticGrayscaleImageBuilder(idol, this.#canvasId, null, this.#canvasBackgroundColor);
        }
        if (effect === 'magnetic' && mode === 'invert') {
            return new MagneticInvertImageBuilder(idol, this.#canvasId, null, this.#canvasBackgroundColor);
        }
        if (effect === 'air' && mode === 'normal') {
            return new AirImageBuilder(idol, this.#canvasId, null, this.#canvasBackgroundColor);
        }
        if (effect === 'air' && mode === 'grayscale') {
            return new AirGrayscaleImageBuilder(idol, this.#canvasId, null, this.#canvasBackgroundColor);
        }
        if (effect === 'air' && mode === 'invert') {
            return new AirInvertImageBuilder(idol, this.#canvasId, null, this.#canvasBackgroundColor);
        }
    }

    /**
     *
     * Get random idol
     *
     * @returns {{src: String, width: Number, height: Number}}
     *
     */
    #getRandomIdol() {
        return this.#idols[this.#getRandomIndex(4)];
    }

    /**
     *
     * Get random mode
     *
     * @returns {String}
     *
     */
    #getRandomMode() {
        return this.#modes[this.#getRandomIndex(3)];
    }

    /**
     *
     * Get random effect
     *
     * @returns {String}
     *
     */
    #getRandomEffect() {
        return this.#effects[this.#getRandomIndex(2)];
    }

    /**
     *
     * Get random index
     *
     * @param {Number} length
     *
     * @returns {Number}
     *
     */
    #getRandomIndex(length) {
        return Math.floor(Math.random() * (length - 1));
    }
}