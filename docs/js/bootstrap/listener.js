/**
 *
 * @description Bootstrap listener
 *
 * @author C. M. de Picciotto <cmdepicciotto@gmail.com>
 *
 */
export default class Listener {
    /**
     *
     * Add click event to button
     *
     * @param {HTMLButtonElement|String} button
     * @param {Function}                 callback
     *
     * @returns {void}
     *
     * @protected
     *
     */
    _addClickToButton(button, callback) {
        button = (typeof button === 'string') ? document.getElementById(button) : button;
        button.addEventListener('click', (event) => {
            event.preventDefault();
            callback();
        });
    }
}

