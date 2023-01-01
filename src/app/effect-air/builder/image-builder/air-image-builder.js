/**
 *
 * @description Air image builder
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 */
import ImageBuilder      from '../../../core/builder/image-builder.js';
import AirImageProcessor from '../../processor/image-processor/air-image-processor.js';
import AirImageListener  from '../../listener/image-listener/air-image-listener.js';
import AirImageRenderer  from '../../renderer/image-renderer/air-image-renderer.js';

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
     * @note This air effect does not need a full resolution image, that is way the gap is set to 3
     *
     */
    _createImageProcessor() {
        return new AirImageProcessor(this.context, this.image, 7);
    }
}