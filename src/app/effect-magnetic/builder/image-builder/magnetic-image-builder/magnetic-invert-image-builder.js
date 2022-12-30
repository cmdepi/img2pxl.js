/**
 *
 * @description Magnetic invert image builder
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 */
import MagneticImageBuilder         from '../magnetic-image-builder.js';
import MagneticInvertImageProcessor from '../../../processor/image-processor/grayscale-image-processor/magnetic-grayscale-image-processor.js';

export default class MagneticInvertImageBuilder extends MagneticImageBuilder {
    /**
     *
     * Factory method. Create image processor
     *
     * @returns {MagneticInvertImageProcessor}
     *
     * @protected
     *
     * @note This magnetic effect does not need a full resolution image, that is way the gap is set to 2
     *
     */
    _createImageProcessor() {
        return new MagneticInvertImageProcessor(this.context, this.image, 2);
    }
}