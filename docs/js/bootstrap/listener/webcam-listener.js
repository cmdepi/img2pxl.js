/**
 *
 * @description Bootstrap webcam listener
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 */
import Image2Pixel from '../../app/image2pixel/main.js';
import Webcam      from '../../app/webcam/main.js';
import Listener    from '../listener.js';

export default class WebcamListener extends Listener {
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
     * @type {HTMLCanvasElement}
     *
     */
    #canvas;

    /**
     *
     * Constructor
     *
     * @param {Image2Pixel} image2Pixel
     * @param {Webcam}      webcam
     * @param {String}      canvasId
     * @param {String}      buttonId
     *
     */
    constructor(image2Pixel, webcam, canvasId, buttonId) {
        super();
        this.#image2Pixel = image2Pixel;
        this.#webcam      = webcam;
        this.#initCanvas(canvasId);
        this.#initEventListener(buttonId);
    }

    /**
     *
     * Init event listener
     *
     * @param {String} buttonId
     *
     * @returns {void}
     *
     */
    #initEventListener(buttonId) {
        this._addClickToButton(buttonId, this.#playWebcam.bind(this));
    }

    /**
     *
     * Play webcam
     *
     * @returns {void}
     *
     */
    #playWebcam() {
        this.#image2Pixel.stop();
        this.#webcam.play();
        this.#initWebcamShootButton();
    }

    /**
     *
     * Init webcam shoot button
     *
     * @returns {void}
     *
     */
    #initWebcamShootButton() {
        const button       = document.createElement('button');
        button.textContent = 'Shoot';
        button.classList.add('shoot');
        this.#canvas.parentNode.appendChild(button);
        this._addClickToButton(button, this.#takePictureFromWebcam.bind(this, button));
    }

    /**
     *
     * Take picture from webcam
     *
     * @param {HTMLButtonElement} shootButton
     *
     * @returns {void}
     *
     */
    #takePictureFromWebcam(shootButton) {
        const image = this.#webcam.shoot();
        this.#image2Pixel.run(null, null, image);
        shootButton.remove();
    }

    /**
     *
     * Init canvas
     *
     * @param {String} canvasId
     *
     * @returns {void}
     *
     */
    #initCanvas(canvasId) {
        this.#canvas = document.getElementById(canvasId);
    }
}

