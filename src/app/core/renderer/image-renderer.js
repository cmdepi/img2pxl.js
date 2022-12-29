/**
 *
 * @description Image renderer
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 */
export default class ImageRenderer {
    /**
     *
     * @type {CanvasRenderingContext2D} context
     *
     * @protected
     *
     */
    _context;

    /**
     *
     * @type {(CanvasGradient|CanvasPattern|String|null)}
     *
     * @note Custom fill style to draw pixels
     *
     */
    #pixelFillStyle;

    /**
     *
     * @type {(CanvasGradient|CanvasPattern|String|null)}
     *
     * @note Background color to clear the canvas
     * @note Canvas is cleared using a fill method instead of a clear method
     *
     * @see clearCanvas()
     *
     */
    #canvasBackgroundColor;

    /**
     *
     * Constructor
     *
     * @param {CanvasRenderingContext2D}                   context
     * @param {(CanvasGradient|CanvasPattern|String|null)} pixelFillStyle
     * @param {(CanvasGradient|CanvasPattern|String|null)} canvasBackgroundColor
     *
     */
    constructor(context, pixelFillStyle = null, canvasBackgroundColor = null) {
        this._context               = context;
        this.#pixelFillStyle        = pixelFillStyle;
        this.#canvasBackgroundColor = canvasBackgroundColor;
    }

    /**
     *
     * Render
     *
     * @param {Pixel[]}   pixels
     * @param {ImageData} imageData
     *
     * @returns {void}
     *
     * @note The information of the image is provided in case it is desired to do some additional processing for the render process
     *
     */
    render(pixels, imageData) {
        /**
         *
         * @note Clear canvas
         *
         */
        this._clearCanvas();

        /**
         *
         * @note Save current context drawing state
         *
         */
        this._context.save();

        /**
         *
         * @note Check if custom fill style was provided to draw pixels
         *
         */
        if (this.#pixelFillStyle) {
            this._context.fillStyle = this.#pixelFillStyle;
        }

        /**
         *
         * @note Loop pixels
         *
         */
        for (let i = 0; i < pixels.length; i++) {
            /**
             *
             * @note Update pixel
             *
             */
            this._updatePixel(pixels[i], imageData);

            /**
             *
             * @note Draw pixel
             *
             */
            this._drawPixel(pixels[i], imageData);
        }

        /**
         *
         * @note Restore context drawing state
         *
         */
        this._context.restore();
    }

    /**
     *
     * Update pixel
     *
     * @param {Pixel}     pixel
     * @param {ImageData} imageData
     *
     * @returns {void}
     *
     * @protected
     *
     * @note This method was implemented to add the possibility of customizing the pixel update process
     * @note The information of the image is provided in case it is desired to do some additional processing for the pixel update process
     *
     */
    _updatePixel(pixel, imageData) {
        pixel.update();
    }

    /**
     *
     * Draw pixel
     *
     * @param {Pixel}     pixel
     * @param {ImageData} imageData
     *
     * @returns {void}
     *
     * @protected
     *
     * @note This method was implemented to add the possibility of customizing the drawing of the pixel
     * @note The information of the image is provided in case it is desired to do some additional processing for the pixel drawing
     *
     */
    _drawPixel(pixel, imageData) {
        /**
         *
         * @note If custom fill style was not provided, then use pixel color information to draw pixel
         *
         */
        if (!this.#pixelFillStyle) {
            this._context.fillStyle = this.#pixelColorToFillStyle(pixel);
        }

        /**
         *
         * @note Draw pixel as rectangles using its coordinates and size
         * @note It is used rectangles instead of circles because drawing circles has performance issues
         *
         */
        this._context.beginPath();
        this._context.rect(pixel.x, pixel.y, pixel.size, pixel.size);
        this._context.fill();
    }

    /**
     *
     * Clear canvas
     *
     * @returns {void}
     *
     * @protected
     *
     * @note This method was implemented to add the possibility of customizing the clear canvas process
     * @note It is used a fill method instead of a clear method to be able to add some effect (like a 'trailing effect') if it is desired
     *
     */
    _clearCanvas() {
        this._context.fillStyle = this.#canvasBackgroundColor;
        this._context.fillRect(0, 0, this._context.canvas.width, this._context.canvas.height);
    }

    /**
     *
     * Convert pixel color to fill style
     *
     * @param {Pixel} pixel
     *
     * @returns {String}
     *
     * @note The rgba style uses an alpha value that must be between 0 and 1, that is why we need to divided it by 255
     *
     */
    #pixelColorToFillStyle(pixel) {
        return 'rgba(' + pixel.color.red + ', ' + pixel.color.green + ', ' + pixel.color.blue + ', ' + pixel.color.alpha/255 + ')';
    }
}