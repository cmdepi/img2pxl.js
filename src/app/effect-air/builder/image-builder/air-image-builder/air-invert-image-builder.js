/**
 *
 * @description Air invert image builder
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 */
import AirImageBuilder         from '../air-image-builder.js';
import AirInvertImageProcessor from '../../../processor/image-processor/invert-image-processor/air-invert-image-processor.js';

export default class AirInvertImageBuilder extends AirImageBuilder {
    /**
     *
     * Factory method. Create image processor
     *
     * @returns {AirInvertImageProcessor}
     *
     * @protected
     *
     * @note This air effect does not need a full resolution image, that is way the gap is set to 3
     *
     */
    _createImageProcessor() {
        return new AirInvertImageProcessor(this.context, this.image, 9);
    }
}