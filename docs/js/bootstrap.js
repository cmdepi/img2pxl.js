/**
 *
 * @description Bootstrap
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 */
import Image2Pixel         from './app/image2pixel/main.js';
import Webcam              from './app/webcam/main.js';
import Image2PixelListener from './bootstrap/listener/image2pixel-listener.js';
import WebcamListener      from './bootstrap/listener/webcam-listener.js';

export default class Bootstrap {
    /**
     *
     * @type {Webcam}
     *
     */
    #webcam;

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
     * @param {String}                         canvasId
     * @param {String}                         canvasBackgroundColor
     * @param {[{id: String, effect: String}]} image2PixelButtons
     * @param {String}                         webcamButtonId
     *
     */
    constructor(canvasId, canvasBackgroundColor, image2PixelButtons, webcamButtonId) {
        this.#initDocument(canvasBackgroundColor);
        this.#initImage2Pixel(canvasId, canvasBackgroundColor);
        this.#initWebcam(canvasId);
        this.#initImage2PixelListener(image2PixelButtons);
        this.#initWebcamListener(canvasId, webcamButtonId);
        this.#init();
    }

    /**
     *
     * Init animation
     *
     * @returns {void}
     *
     */
    #init() {
        this.#image2Pixel.run();
    }

    /**
     *
     * Init image2pixel.js listener
     *
     * @param {[{id: String, effect: String}]} image2PixelButtons
     *
     * @returns {void}
     *
     */
    #initImage2PixelListener(image2PixelButtons) {
        new Image2PixelListener(this.#image2Pixel, image2PixelButtons);
    }

    /**
     *
     * Init webcam listener
     *
     * @param {String} canvasId
     * @param {String} webcamButtonId
     *
     * @returns {void}
     *
     */
    #initWebcamListener(canvasId, webcamButtonId) {
        new WebcamListener(this.#image2Pixel, this.#webcam, canvasId, webcamButtonId);
    }

    /**
     *
     * Init webcam feature
     *
     * @param {String} canvasId
     *
     * @returns {void}
     *
     */
    #initWebcam(canvasId) {
        this.#webcam = new Webcam(canvasId);
    }

    /**
     *
     * Init image2pixel.js effect
     *
     * @param {String} canvasId
     * @param {String} canvasBackgroundColor
     *
     * @returns {void}
     *
     */
    #initImage2Pixel(canvasId, canvasBackgroundColor) {
        this.#image2Pixel = new Image2Pixel(canvasId, canvasBackgroundColor);
    }

    /**
     *
     * Init document
     *
     * @param {String} canvasBackgroundColor
     *
     * @returns {void}
     *
     */
    #initDocument(canvasBackgroundColor) {
        document.body.style.backgroundColor = canvasBackgroundColor;
    }
}

