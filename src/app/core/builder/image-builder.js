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
     * @param {(CanvasGradient|CanvasPattern|String|null)}   pixelsFillStyle
     * @param {(CanvasGradient|CanvasPattern|String|null)}   canvasBackgroundColor
     *
     */
    constructor(image, canvasId, pixelsFillStyle = null, canvasBackgroundColor = null) {
        this.#initImage(image);
        this.#initCanvas(canvasId);
        this.initImageRenderer(pixelsFillStyle, canvasBackgroundColor);
        this.initImageListener();
        this.initImageProcessor();
    }

    /**
     *
     * Factory method. Init image renderer
     *
     * @param {(CanvasGradient|CanvasPattern|String|null)} pixelsFillStyle
     * @param {(CanvasGradient|CanvasPattern|String|null)} canvasBackgroundColor
     *
     * @returns {void}
     *
     * @note This method was implemented to add the possibility of customizing the type of image renderer created
     *
     */
    initImageRenderer(pixelsFillStyle, canvasBackgroundColor) {
        this.imageRenderer = new ImageRenderer(pixelsFillStyle, canvasBackgroundColor);
    }

    /**
     *
     * Factory method. Init image listener
     *
     * @returns {void}
     *
     * @note This method was implemented to add the possibility of customizing the type of image listener created
     *
     */
    initImageListener() {
        this.imageListener = new ImageListener(this.canvas);
    }

    /**
     *
     * Factory method. Init image processor
     *
     * @returns {void}
     *
     * @note This method was implemented to add the possibility of customizing the type of image processor created
     *
     */
    initImageProcessor() {
        this.imageProcessor = new ImageProcessor(this.context);
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