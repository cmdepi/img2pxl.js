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
     * @type {HTMLButtonElement}
     *
     */
    #shootButton;

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
     * @type {(Number|null)}
     *
     */
    #animationId = null;

    /**
     *
     * Constructor
     *
     * @param {String} canvasId
     * @param {String} canvasContainerId
     * @param {Number} width
     *
     */
    constructor(canvasId, canvasContainerId, width = 350) {
        this.#initVideo();
        this.#initCanvas(canvasId, width);
        this.#initShootButton(canvasContainerId);
        this.#captureVideo();
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
        this.#animationId = requestAnimationFrame(this.#drawVideo.bind(this));
    }

    /**
     *
     * Init shoot button
     *
     * @param {String} canvasContainerId
     *
     * @returns {void}
     *
     */
    #initShootButton(canvasContainerId) {
        const container   = document.getElementById(canvasContainerId);
        this.#shootButton = document.createElement('button');
        this.#shootButton.classList.add('shoot');
        this.#shootButton.textContent = 'Shoot';
        this.#shootButton.addEventListener('click', (event) => {
           event.preventDefault();
           this.shoot();
        });
        container.appendChild(this.#shootButton);
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