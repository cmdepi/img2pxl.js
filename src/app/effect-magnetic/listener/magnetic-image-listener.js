/**
 *
 * @description Magnetic image listener
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 */
import ImageListener from '../../core/listener/image-listener.js';

export default class MagneticImageListener extends ImageListener {
    /**
     *
     * @type {Number}
     *
     * @note This attribute is used to determine the area of pixels affected by the pointer
     *
     */
    #pointerRadius;

    /**
     *
     * Constructor
     *
     * @param {HTMLCanvasElement} canvas
     * @param {Number}            pointerRadius
     *
     */
    constructor(canvas, pointerRadius = 5000) {
        super(canvas);
        this.#pointerRadius = pointerRadius;
    }

    /**
     *
     * Add listeners to canvas
     *
     * @param {Pixel[]}   pixels
     * @param {ImageData} imageData
     *
     * @returns {void}
     *
     */
    listen(pixels, imageData) {
        /**
         *
         * @note Add on mouse move event
         *
         */
        this._canvas.addEventListener('mousemove', event => {
            event.preventDefault();
            this.update(pixels, imageData, event.x, event.y);
        });

        /**
         *
         * @note Add on touch move event
         *
         */
        this.canvas.addEventListener('touchmove', event => {
            event.preventDefault();
            this.update(pixels, imageData, event.targetTouches[0].clientX, event.targetTouches[0].clientY);
        }, false);
    }

    /**
     *
     * Update pixels
     *
     * @param {Pixel[]}   pixels
     * @param {ImageData} imageData
     * @param {Number}    x
     * @param {Number}    y
     *
     * @returns {void}
     *
     */
    update(pixels, imageData, x, y) {
        /**
         *
         * @note Init pointer coordinates
         *
         */
        const pointer = this.#pointerToCanvasCoordinates(x, y);

        /**
         *
         * @note Loop pixels
         *
         */
        for (let i = 0; i < pixels.length; i++) {
            /**
             *
             * @note Calculate squared distance between pointer and pixel
             *
             */
            const dx       = pointer.x - pixels[i].x;
            const dy       = pointer.y - pixels[i].y;
            const distance = dx * dx + dy * dy;

            /**
             *
             * @note Check distance
             * @note Pixels inside the affected area are moved from its position
             *
             */
            if(distance < this.#pointerRadius) {
                /**
                 *
                 * @note Move pixel
                 * @note The force used to move the pixels is inversely proportional to the distance (the smaller the distance, the greater the force applied to move the pixel)
                 * @note The applied force is negated since, in this way, with the help of the sine and cosine corresponding to the angle that separates the pixel from the pointer, the pixel can be moved to the direction that corresponds to it
                 *
                 */
                const force   = -(this.#pointerRadius/distance);
                const angle   = Math.atan2(dy, dx);
                pixels[i].vx += force * Math.cos(angle);
                pixels[i].vy += force * Math.sin(angle);
            }
        }
    }

    /**
     *
     * Pointer to canvas coordinates
     *
     * @param {Number} x
     * @param {Number} y
     *
     * @returns {{x: Number, y: Number}}
     *
     * @note This method receives the coordinates related to the viewport and converts them to coordinates related to the canvas
     *
     */
    #pointerToCanvasCoordinates(x, y) {
        let rect = this._canvas.getBoundingClientRect();
        return {
            x: x - rect.left,
            y: y - rect.top
        };
    }
}