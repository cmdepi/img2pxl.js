/**
 *
 * @description Bootstrap
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 */
import AirImageBuilder from '../../src/app/effect-air/builder/image-builder/air-image-builder.js';
import Image2Pixel     from '../../src/image2pixel.js';

export default class Bootstrap {
    /**
     *
     * Run
     *
     * @param {{src: String, width: Number, height: Number}} image
     * @param {String}                                       canvasId
     * @param {String}                                       backgroundColor
     *
     * @returns {void}
     *
     */
    run(image, canvasId, backgroundColor) {
        new Image2Pixel(this.#createImageBuilder(image, canvasId, backgroundColor));
    }

    /**
     *
     * Factory method. Create image builder
     *
     * @param {{src: String, width: Number, height: Number}} image
     * @param {String}                                       canvasId
     * @param {String}                                       backgroundColor
     *
     * @returns ImageBuilder
     *
     */
    #createImageBuilder(image, canvasId, backgroundColor) {
        return new AirImageBuilder(
            image,
            canvasId,
            null,
            backgroundColor
        );
    }
}

