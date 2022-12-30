/**
 *
 * @description Magnetic grayscale image builder
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 */
import MagneticImageBuilder            from '../magnetic-image-builder.js';
import MagneticGrayscaleImageProcessor from '../../../processor/image-processor/grayscale-image-processor/magnetic-grayscale-image-processor.js';

export default class MagneticGrayscaleImageBuilder extends MagneticImageBuilder {
    /**
     *
     * Factory method. Create image processor
     *
     * @returns {MagneticGrayscaleImageProcessor}
     *
     * @protected
     *
     * @note This magnetic effect does not need a full resolution image, that is way the gap is set to 2
     *
     */
    _createImageProcessor() {
        return new MagneticGrayscaleImageProcessor(this.context, this.image, 4);
    }
}