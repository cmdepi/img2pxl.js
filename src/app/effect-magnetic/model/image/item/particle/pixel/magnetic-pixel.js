/**
 *
 * @description Magnetic pixel
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 * @note A magnetic pixel is a pixel that remembers its initial position and try to return to it if it was displaced from it
 *
 */
import StatefulPixel from '../../../../../../core/model/image/particle/pixel/stateful-pixel.js';

export default class MagneticPixel extends StatefulPixel {
    /**
     *
     * @type {Number}
     *
     */
    #magneticForce;

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
     * @param {Number}                                                    magneticForce
     *
     */
    constructor(
        color,
        x             = 0,
        y             = 0,
        vx            = 0,
        vy            = 0,
        size          = 1,
        magneticForce = 0.98
    ) {
        super(color, x, y, vx, vy, size);
        this.#magneticForce = magneticForce;
    }

    /**
     *
     * Update
     *
     * @returns {void}
     *
     * @note The applied velocity moves the pixel away from its original position
     * @note The magnetic force will slow down the velocity by a certain factor until it becomes 0 and thus allow the pixel to return to its original position
     *
     */
    update() {
        this.vx *= this.#magneticForce
        this.vy *= this.#magneticForce
        this.x  += this.vx + (this._initX - this.x) * this.#magneticForce * 0.3;
        this.y  += this.vy + (this._initY - this.y) * this.#magneticForce * 0.3;
    }
}