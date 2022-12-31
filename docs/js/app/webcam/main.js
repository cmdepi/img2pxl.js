/**
 *
 * @description Entry point for webcam feature
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
     * @type {Number}
     *
     * @note Custom width to adjust video height
     *
     */
    #defaultVideoWidth;

    /**
     *
     * @type {(Number|null)}
     *
     */
    #animationId = null;

    /**
     *
     * Constructor
     *
     * @param {String} canvasId
     * @param {Number} defaultVideoWidth
     *
     */
    constructor(canvasId, defaultVideoWidth = 350) {
        this.#defaultVideoWidth = defaultVideoWidth;
        this.#initCanvas(canvasId);
        this.#initVideo();
    }

    /**
     *
     * Play video on canvas
     *
     * @returns {void}
     *
     */
    play() {
        this.#bootVideo();
        this.#configVideo();
        this.#loadVideo();
    }

    /**
     *
     * Take photo from video (webcam)
     *
     * @returns {HTMLImageElement}
     *
     */
    shoot() {
        if (this.#animationId) {
            cancelAnimationFrame(this.#animationId);
        }
        const data   = this.#canvas.toDataURL('image/png');
        const image  = new Image();
        image.src    = data;
        image.width  = this.#canvas.width;
        image.height = this.#canvas.height;
        return image;
    }

    /**
     *
     * Load video
     *
     * @returns {void}
     *
     * @note This method uses the onloadeddata event of the video element to draw video frame on the canvas
     * @note The onloadeddata event runs after the onloadedmetadata event
     *
     */
    #loadVideo() {
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
        this.#animationId = requestAnimationFrame(this.#drawVideo.bind(this));
    }

    /**
     *
     * Config video
     *
     * @returns {void}
     *
     * @note This method uses the onloadedmetadata event of the video element to set canvas dimensions using video dimensions
     *
     */
    #configVideo() {
        this.#video.onloadedmetadata = () => {
            this.#canvas.width  = this.#defaultVideoWidth;
            this.#canvas.height = this.#defaultVideoWidth * (this.#video.videoWidth / this.#video.videoHeight);
        };
    }

    /**
     *
     * Boot video
     *
     * @returns {void}
     *
     */
    #bootVideo() {
        const userMedia = navigator.mediaDevices.getUserMedia({video: true, audio: false});
        userMedia.then((stream) => {
            this.#video.srcObject = stream;
            this.#video.play();
        });
        userMedia.catch((error) => {
            alert('An error occurred: ' + error);
        });
    }

    /**
     *
     * Init video
     *
     * @returns {void}
     *
     */
    #initVideo() {
        this.#video = document.createElement('video');
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
        this.#canvas  = document.getElementById(canvasId);
        this.#context = this.#canvas.getContext('2d');
    }
}