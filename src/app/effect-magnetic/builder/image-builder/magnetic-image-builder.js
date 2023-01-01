/**
 *
 * @description Magnetic image builder
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 */
import ImageBuilder           from '../../../core/builder/image-builder.js';
import MagneticImageProcessor from '../../processor/image-processor/magnetic-image-processor.js';
import MagneticImageListener  from '../../listener/image-listener/magnetic-image-listener.js';
import MagneticImageRenderer  from '../../renderer/image-renderer/magnetic-image-renderer.js';

export default class MagneticImageBuilder extends ImageBuilder {
    /**
     *
     * Factory method. Create image renderer
     *
     * @param {(CanvasGradient|CanvasPattern|String|null)} pixelFillStyle
     * @param {(CanvasGradient|CanvasPattern|String|null)} canvasBackgroundColor
     *
     * @returns {MagneticImageRenderer}
     *
     * @protected
     *
     */
    _createImageRenderer(pixelFillStyle, canvasBackgroundColor) {
        return new MagneticImageRenderer(this.context, pixelFillStyle, canvasBackgroundColor);
    }

    /**
     *
     * Factory method. Create image listener
     *
     * @returns {MagneticImageListener}
     *
     * @protected
     *
     */
    _createImageListener() {
        return new MagneticImageListener(this.canvas);
    }

    /**
     *
     * Factory method. Create image processor
     *
     * @returns {MagneticImageProcessor}
     *
     * @protected
     *
     * @note This magnetic effect does not need a full resolution image, that is way the gap is set to 2
     *
     */
    _createImageProcessor() {
        return new MagneticImageProcessor(this.context, this.image, 8);
    }
}