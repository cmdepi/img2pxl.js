/**
 *
 * @description Particle
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 */
export default class Particle {
    /**
     *
     * @type {Number}
     *
     * @note Particle x position considering canvas default coordinate space
     *
     */
    x;

    /**
     *
     * @type {Number}
     *
     * @note Particle y position considering canvas default coordinate space
     *
     */
    y;

    /**
     *
     * @type {Number}
     *
     */
    vx;

    /**
     *
     * @type {Number}
     *
     */
    vy;

    /**
     *
     * @type {Number}
     *
     */
    size;

    /**
     *
     * Constructor
     *
     * @param {Number} x
     * @param {Number} y
     * @param {Number} vx
     * @param {Number} vy
     * @param {Number} size
     *
     */
    constructor(x = 0, y = 0, vx = 0, vy = 0, size = 1) {
        this.x    = x;
        this.y    = y;
        this.vx   = vx;
        this.vy   = vy;
        this.size = size;
    }

    /**
     *
     * Update
     *
     * @returns {void}
     *
     */
    update() {
        this.x += this.vx;
        this.y += this.vy;
    }
}