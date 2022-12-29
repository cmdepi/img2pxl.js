/**
 *
 * @description Air pixel
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 * @note An air pixel is a pixel that moves around the entire image
 * @note This pixel has brightness information that affects its velocity and size
 *
 */
import StatefulPixel from '../../../../../../core/model/image/particle/pixel/stateful-pixel.js';

export default class AirPixel extends StatefulPixel {
    /**
     *
     * @type {{red: Number, green: Number, blue: Number, alpha: Number, brightness: Number}}
     *
     * @note Pixel color information
     * @note Every color value (red, green, blue and alpha) could be between 0 and 255 (it has the same range of values utilizes by the ImageData object)
     *
     * @see {ImageData}
     *
     */
    color = {
        'red'       : 0,
        'green'     : 0,
        'blue'      : 0,
        'alpha'     : 0,
        'brightness': 0
    };

    /**
     *
     * Update
     *
     * @returns {void}
     *
     */
    update() {
        /**
         *
         * @note Update size considering brightness
         *
         */
        this.size = this.color.brightness * 1.5;

        /**
         *
         * @note Update coordinates considering brightness
         * @note The pixel moves in circles on the x-axis
         * @note The pixel goes up on the y-axis (that is way the y coordinate is decreased)
         *
         */
        const inc  = (2.5 - this.color.brightness)
        this.x    += Math.random() * 2 - 1;
        this.y    -= inc + this.vy;
    }
}