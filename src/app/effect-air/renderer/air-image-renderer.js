/**
 *
 * @description Air image renderer
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 */
import Image         from '../util/image.js'
import ImageRenderer from '../../core/renderer/image-renderer.js';

export default class AirImageRenderer extends ImageRenderer {
    /**
     *
     * Update pixel
     *
     * @param {(AirPixel|Pixel)} pixel
     * @param {ImageData}        imageData
     *
     * @returns {void}
     *
     * @protected
     *
     */
    _updatePixel(pixel, imageData) {
        /**
         *
         * @note Update pixel
         *
         */
        super._updatePixel(pixel, imageData);

        /**
         *
         * @note Get pixel color related to its new position
         *
         */
        const color = Image.getImagePixelColorsFromImageData(imageData, pixel.x, pixel.y);

        /**
         *
         * @note Check if the pixel exceeded the upper limits of the canvas (remember that this type of pixel always moves in circles on the x-axis and goes up on the y-axis)
         * @note Check if pixel new position is outside the image (the verification is carried out considering the alpha value of the image)
         *
         */
        if (pixel.x < 0 || pixel.x >= this.context.canvas.width || pixel.y >= this.context.canvas.height || color.alpha === 0) {
            /**
             *
             * @note Restore pixel initial values if its new position is outside the image
             *
             */
            pixel.restore();
        }
        else {
            /**
             *
             * @note Set new color information to the pixel related to its new position
             *
             */
            pixel.color = color;
        }
    }

    /**
     *
     * Clear canvas
     *
     * @returns {void}
     *
     * @protected
     *
     * @note Add alpha value to incorporate a 'trailing effect'
     *
     */
    _clearCanvas() {
        this.context.globalAlpha = 0.1;
        super._clearCanvas();
    }
}