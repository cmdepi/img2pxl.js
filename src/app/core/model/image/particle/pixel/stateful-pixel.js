/**
 *
 * @description Stateful pixel
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 * @note An stateful pixel is a pixel that remembers its original state. It can be useful if the pixel starts to move and change its color, and it is desired to recover its initial values
 *
 */
import Pixel from '../pixel.js';

export default class StatefulPixel extends Pixel {
    /**
     *
     * @type {Number}
     *
     * @protected
     *
     */
    _initX;

    /**
     *
     * @type {Number}
     *
     * @protected
     *
     */
    _initY;

    /**
     *
     * @type {{red: Number, green: Number, blue: Number, alpha: Number}}
     *
     * @protected
     *
     */
    _initColor;

    /**
     *
     * Constructor
     *
     * @param {{red: Number, green: Number, blue: Number, alpha: Number}} color
     * @param {Number}                                                    x
     * @param {Number}                                                    y
     * @param {Number}                                                    vx
     * @param {Number}                                                    vy
     * @param {Number}                                                    size
     *
     */
    constructor(color, x = 0, y = 0, vx = 0, vy = 0, size = 1) {
        super(color, x, y, vx, vy, size);
        this._initX     = x;
        this._initY     = y;
        this._initColor = color;
    }

    /**
     *
     * Restore initial values
     *
     * @returns {void}
     *
     */
    restore() {
        this.x     = this._initX;
        this.y     = this._initY;
        this.color = this._initColor;
    }
}