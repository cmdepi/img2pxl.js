/**
 *
 * @description Webcam feature
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 */
export default class Main {
    /**
     *
     * @type {HTMLVideoElement}
     *
     */
    #video;

    /**
     *
     * @type {HTMLCanvasElement}
     *
     */
    #canvas;

    /**
     *
     * @type {CanvasRenderingContext2D}
     *
     */
    #context;

    /**
     *
     * Constructor
     *
     * @param {String} canvasId
     * @param {Number} width
     *
     */
    constructor(canvasId, width = 350) {
        this.#initVideo();
        this.#initCanvas(canvasId, width);
        this.#captureVideo();
    }

    /**
     *
     * Capture video
     *
     * @returns {void}
     *
     * @note This method uses the onloadeddata event of the video element to draw video frame on the canvas
     * @note The onloadeddata event runs after the onloadedmetadata event
     *
     */
    #captureVideo() {
        this.#video.onloadeddata = () => {
            this.#drawVideo();
        };
    }

    /**
     *
     * Draw video
     *
     * @returns {void}
     *
     */
    #drawVideo() {
        this.#context.drawImage(this.#video, 0, 0, this.#canvas.width, this.#canvas.height);
        requestAnimationFrame(this.#drawVideo.bind(this));
    }

    /**
     *
     * Init canvas
     *
     * @param {String} canvasId
     * @param {Number} width
     *
     * @returns {void}
     *
     * @note Use a custom width to adjust video height
     * @note This method uses the onloadedmetadata event of the video element to set canvas dimensions using video dimensions
     *
     */
    #initCanvas(canvasId, width) {
        this.#canvas  = document.getElementById(canvasId);
        this.#context = this.#canvas.getContext('2d');
        this.#video.onloadedmetadata = () => {
            this.#canvas.width  = width;
            this.#canvas.height = width * (this.#video.videoWidth / this.#video.videoHeight);
        };
    }

    /**
     *
     * Init video
     *
     * @returns {void}
     *
     */
    #initVideo() {
        this.#video     = document.createElement('video');
        const userMedia = navigator.mediaDevices.getUserMedia({video: true, audio: false});
        userMedia.then((stream) => {
            this.#video.srcObject = stream;
            this.#video.play();
        });
        userMedia.catch((error) => {
            alert('An error occurred: ' + error);
        });
    }
}