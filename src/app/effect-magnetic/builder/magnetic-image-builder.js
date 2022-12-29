/**
 *
 * @description Magnetic image builder
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 */
import ImageBuilder           from '../../core/builder/image-builder.js';
import MagneticImageProcessor from '../processor/magnetic-image-processor.js';
import MagneticImageListener  from '../listener/magnetic-image-listener.js';
import MagneticImageRenderer  from '../renderer/magnetic-image-renderer.js';

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
     */
    createImageRenderer(pixelFillStyle, canvasBackgroundColor) {
        new MagneticImageRenderer(this.context, pixelFillStyle, canvasBackgroundColor);
    }

    /**
     *
     * Factory method. Create image listener
     *
     * @returns {MagneticImageListener}
     *
     */
    createImageListener() {
        return new MagneticImageListener(this.canvas);
    }

    /**
     *
     * Factory method. Create image processor
     *
     * @returns {MagneticImageProcessor}
     *
     */
    createImageProcessor() {
        return new MagneticImageProcessor(this.context, this.image);
    }
}