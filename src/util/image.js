/**
 *
 * @description Image utility
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 * @note An utility implementation to be able to work with an image and its pixels
 *
 */
export default class Image {
    /**
     *
     * Update image data color
     *
     * @param {ImageData}                                                 imageData
     * @param {Number}                                                    x
     * @param {Number}                                                    y
     * @param {{red: Number, green: Number, blue: Number, alpha: Number}} color
     *
     * @returns {void}
     *
     */
    static updateImageDataColor(imageData, x, y, color) {
        const row = this.getImagePixelRow(y, imageData.width);
        const col = this.getImagePixelCol(x);
        imageData.data[row + col]     = color.red;
        imageData.data[row + col + 1] = color.green;
        imageData.data[row + col + 2] = color.blue;
        imageData.data[row + col + 3] = color.alpha;
    }

    /**
     *
     * Get colors from image data using image pixel coordinates
     *
     * @param {ImageData} imageData
     * @param {Number}    x
     * @param {Number}    y
     *
     * @returns {{red: Number, green: Number, blue: Number, alpha: Number}}
     *
     */
    static getImagePixelColorsFromImageData(imageData, x, y) {
        const row = this.getImagePixelRow(y, imageData.width);
        const col = this.getImagePixelCol(x);
        return {
            red  : imageData.data[row + col],
            green: imageData.data[row + col + 1],
            blue : imageData.data[row + col + 2],
            alpha: imageData.data[row + col + 3]
        };
    }

    /**
     *
     * Get image pixel row from its y coordinate
     *
     * @param {Number} y
     * @param {Number} imageWidth
     *
     * @returns {Number}
     *
     * @note The y coordinate of a pixel indicates in what row this pixel is (every row has a length compound of the pixel elements - 4: red, green, blue, alpha - multiplied by the image width)
     * @note The coordinates of the pixel could be in floating numbers and in order to work with them in the grid of pixels that make up the image, it is necessary to convert them to integers
     *
     */
    static getImagePixelRow(y, imageWidth) {
        return Math.floor(y) * 4 * imageWidth;
    }

    /**
     *
     * Get image pixel column from its x coordinate
     *
     * @param {Number} x
     *
     * @returns {Number}
     *
     * @note The x coordinate of a pixel indicates in what column this pixel is (every column has a length determined by the pixel elements - 4: red, green, blue, alpha)
     * @note The coordinates of the pixel could be in floating numbers and in order to work with them in the grid of pixels that make up the image, it is necessary to convert them to integers
     *
     */
    static getImagePixelCol(x) {
        return Math.floor(x) * 4;
    }
}