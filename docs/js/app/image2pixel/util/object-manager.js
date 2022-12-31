/**
 *
 * @description Object manager
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 */
import MagneticImageBuilder          from 'https://cdn.jsdelivr.net/gh/cmdepi/image2pixel.js@master/src/app/effect-magnetic/builder/image-builder/magnetic-image-builder.js';
import MagneticGrayscaleImageBuilder from 'https://cdn.jsdelivr.net/gh/cmdepi/image2pixel.js@master/src/app/effect-magnetic/builder/image-builder/magnetic-image-builder/magnetic-grayscale-image-builder.js';
import MagneticInvertImageBuilder    from 'https://cdn.jsdelivr.net/gh/cmdepi/image2pixel.js@master/src/app/effect-magnetic/builder/image-builder/magnetic-image-builder/magnetic-invert-image-builder.js';
import AirImageBuilder               from 'https://cdn.jsdelivr.net/gh/cmdepi/image2pixel.js@master/src/app/effect-air/builder/image-builder/air-image-builder.js';
import AirGrayscaleImageBuilder      from 'https://cdn.jsdelivr.net/gh/cmdepi/image2pixel.js@master/src/app/effect-air/builder/image-builder/air-image-builder/air-grayscale-image-builder.js';
import AirInvertImageBuilder         from 'https://cdn.jsdelivr.net/gh/cmdepi/image2pixel.js@master/src/app/effect-air/builder/image-builder/air-image-builder/air-invert-image-builder.js';

export default class ObjectManager {
    /**
     *
     * @type {String}
     *
     */
    #effect;

    /**
     *
     * @note {String}
     *
     */
    #mode;

    /**
     *
     * @type {{src: String, width: Number, height: Number}}
     *
     */
    #idol;

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
        this.#effect                = this.#getRandomEffect();
        this.#mode                  = this.#getRandomMode();
        this.#idol                  = this.#getRandomIdol();
    }

    /**
     *
     * Create
     *
     * @param {String|null}                                       effect
     * @param {String|null}                                       mode
     * @param {{src: String, width: Number, height: Number}|null} idol
     *
     * @returns {(MagneticGrayscaleImageBuilder|AirInvertImageBuilder|AirGrayscaleImageBuilder|AirImageBuilder|MagneticImageBuilder|MagneticInvertImageBuilder)}
     *
     */
    create(effect = null, mode = null, idol = null) {
        this.#effect = effect ? effect: this.#effect;
        this.#mode   = mode   ? mode  : this.#mode;
        this.#idol   = idol   ? idol  : this.#idol;
        return this.#createBuilder();
    }

    /**
     *
     * Create builder
     *
     * @returns {(MagneticGrayscaleImageBuilder|AirInvertImageBuilder|AirGrayscaleImageBuilder|AirImageBuilder|MagneticImageBuilder|MagneticInvertImageBuilder)}
     *
     */
    #createBuilder() {
        if (this.#effect === 'magnetic' && this.#mode === 'normal') {
            return new MagneticImageBuilder(this.#idol, this.#canvasId, null, this.#canvasBackgroundColor);
        }
        if (this.#effect === 'magnetic' && this.#mode === 'grayscale') {
            return new MagneticGrayscaleImageBuilder(this.#idol, this.#canvasId, null, this.#canvasBackgroundColor);
        }
        if (this.#effect === 'magnetic' && this.#mode === 'invert') {
            return new MagneticInvertImageBuilder(this.#idol, this.#canvasId, null, this.#canvasBackgroundColor);
        }
        if (this.#effect === 'air' && this.#mode === 'normal') {
            return new AirImageBuilder(this.#idol, this.#canvasId, null, this.#canvasBackgroundColor);
        }
        if (this.#effect === 'air' && this.#mode === 'grayscale') {
            return new AirGrayscaleImageBuilder(this.#idol, this.#canvasId, null, this.#canvasBackgroundColor);
        }
        if (this.#effect === 'air' && this.#mode === 'invert') {
            return new AirInvertImageBuilder(this.#idol, this.#canvasId, null, this.#canvasBackgroundColor);
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