/**
 *
 * @description Air grayscale image builder
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 */
import AirImageBuilder            from '../air-image-builder.js';
import AirGrayscaleImageProcessor from '../../../processor/image-processor/grayscale-image-processor/air-grayscale-image-processor.js';

export default class AirGrayscaleImageBuilder extends AirImageBuilder {
    /**
     *
     * Factory method. Create image processor
     *
     * @returns {AirGrayscaleImageProcessor}
     *
     * @protected
     *
     * @note This air effect does not need a full resolution image, that is way the gap is set to 3
     *
     */
    _createImageProcessor() {
        return new AirGrayscaleImageProcessor(this.context, this.image, 9);
    }
}