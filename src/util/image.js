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
        const itemSize = 4;
        const row      = this.getImagePixelRow(y, imageData.width, itemSize);
        const col      = this.getImagePixelCol(x, itemSize);
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
     * @param {Number} itemSize
     *
     * @returns {Number}
     *
     * @note The y coordinate of a pixel indicates in what row this pixel is (every row has a length compound of the item size - pixel elements - multiplied by the image width)
     * @note The coordinates of the pixel could be in floating numbers and in order to work with them in the grid of pixels that make up the image, it is necessary to convert them to integers
     *
     */
    static getImagePixelRow(y, imageWidth, itemSize) {
        return Math.floor(y) * itemSize * imageWidth;
    }

    /**
     *
     * Get image pixel column from its x coordinate
     *
     * @param {Number} x
     * @param {Number} itemSize
     *
     * @returns {Number}
     *
     * @note The x coordinate of a pixel indicates in what column this pixel is (every column has a length determined by the item size)
     * @note The coordinates of the pixel could be in floating numbers and in order to work with them in the grid of pixels that make up the image, it is necessary to convert them to integers
     *
     */
    static getImagePixelCol(x, itemSize) {
        return Math.floor(x) * itemSize;
    }
}