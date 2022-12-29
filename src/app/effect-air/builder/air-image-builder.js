/**
 *
 * @description Air image builder
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 */
import ImageBuilder      from '../../core/builder/image-builder.js';
import AirImageProcessor from '../processor/air-image-processor.js';
import AirImageListener  from '../listener/air-image-listener.js';
import AirImageRenderer  from '../renderer/air-image-renderer.js';

export default class AirImageBuilder extends ImageBuilder {
    /**
     *
     * Factory method. Create image renderer
     *
     * @param {(CanvasGradient|CanvasPattern|String|null)} pixelFillStyle
     * @param {(CanvasGradient|CanvasPattern|String|null)} canvasBackgroundColor
     *
     * @returns {AirImageRenderer}
     *
     * @protected
     *
     */
    _createImageRenderer(pixelFillStyle, canvasBackgroundColor) {
        return new AirImageRenderer(this.context, pixelFillStyle, canvasBackgroundColor);
    }

    /**
     *
     * Factory method. Create image listener
     *
     * @returns {AirImageListener}
     *
     * @protected
     *
     */
    _createImageListener() {
        return new AirImageListener(this.canvas);
    }

    /**
     *
     * Factory method. Create image processor
     *
     * @returns {AirImageProcessor}
     *
     * @protected
     *
     */
    _createImageProcessor() {
        return new AirImageProcessor(this.context, this.image);
    }
}