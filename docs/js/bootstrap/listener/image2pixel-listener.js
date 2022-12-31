/**
 *
 * @description Bootstrap image2pixel.js effect listener
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 */
import Image2Pixel from '../../app/image2pixel/main.js';
import Listener    from '../listener.js';

export default class Image2PixelListener extends Listener {
    /**
     *
     * @type {Image2Pixel}
     *
     */
    #image2Pixel;

    /**
     *
     * Constructor
     *
     * @param {Image2Pixel}                    image2Pixel
     * @param {[{id: String, effect: String}]} buttons
     *
     */
    constructor(image2Pixel, buttons) {
        super();
        this.#image2Pixel = image2Pixel;
        this.#initEventListeners(buttons);
    }

    /**
     *
     * Init event listeners
     *
     * @param {[{id: String, effect: String}]} buttons
     *
     * @returns {void}
     *
     */
    #initEventListeners(buttons) {
        buttons.forEach((button) => {
            this._addClickToButton(
                button.id,
                () => this.#image2Pixel.run(button.effect)
            );
        });
    }
}

