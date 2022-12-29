/**
 *
 * @description Image builder
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 */
import ImageProcessor from '../processor/image-processor.js';
import ImageListener  from '../listener/image-listener.js';
import ImageRenderer  from '../renderer/image-renderer.js';

export default class ImageBuilder {
    /**
     *
     * @type {ImageRenderer}
     *
     */
    imageRenderer;

    /**
     *
     * @type {ImageListener}
     *
     */
    imageListener;

    /**
     *
     * @type {ImageProcessor}
     *
     */
    imageProcessor;

    /**
     *
     * @type {HTMLImageElement}
     *
     */
    image;

    /**
     *
     * @type {HTMLCanvasElement}
     *
     */
    canvas;

    /**
     *
     * @type {CanvasRenderingContext2D}
     *
     */
    context;

    /**
     *
     * Constructor
     *
     * @param {{src: String, width: Number, height: Number}} image
     * @param {String}                                       canvasId
     * @param {(CanvasGradient|CanvasPattern|String|null)}   pixelFillStyle
     * @param {(CanvasGradient|CanvasPattern|String|null)}   canvasBackgroundColor
     *
     */
    constructor(image, canvasId, pixelFillStyle = null, canvasBackgroundColor = null) {
        this.#initImage(image);
        this.#initCanvas(canvasId);
        this.imageProcessor = this.createImageProcessor();
        this.imageListener  = this.createImageListener();
        this.imageRenderer  = this.createImageRenderer(pixelFillStyle, canvasBackgroundColor);
    }

    /**
     *
     * Factory method. Create image renderer
     *
     * @param {(CanvasGradient|CanvasPattern|String|null)} pixelFillStyle
     * @param {(CanvasGradient|CanvasPattern|String|null)} canvasBackgroundColor
     *
     * @returns {ImageRenderer}
     *
     * @note This method was implemented to add the possibility of customizing the type of image renderer created
     *
     */
    createImageRenderer(pixelFillStyle, canvasBackgroundColor) {
        return new ImageRenderer(this.context, pixelFillStyle, canvasBackgroundColor);
    }

    /**
     *
     * Factory method. Create image listener
     *
     * @returns {ImageListener}
     *
     * @note This method was implemented to add the possibility of customizing the type of image listener created
     *
     */
    createImageListener() {
        return new ImageListener(this.canvas);
    }

    /**
     *
     * Factory method. Create image processor
     *
     * @returns {ImageProcessor}
     *
     * @note This method was implemented to add the possibility of customizing the type of image processor created
     *
     */
    createImageProcessor() {
        return new ImageProcessor(this.context, this.image);
    }

    /**
     *
     * Init image
     *
     * @param {{src: String, width: Number, height: Number}} image
     *
     * @returns {void}
     *
     */
    #initImage(image) {
        this.image        = new Image();
        this.image.src    = image.src;
        this.image.width  = image.width;
        this.image.height = image.height;
    }

    /**
     *
     * Init canvas
     *
     * @param {String} canvasId
     *
     * @returns {void}
     *
     * @note Init canvas context
     *
     */
    #initCanvas(canvasId) {
        this.canvas  = document.getElementById(canvasId);
        this.context = this.canvas.getContext('2d');
    }
}