/**
 * @module utils
 */

/**
 * Checks if current environment is mobile/tablet
 *
 * @returns {boolean} true if environment is mobile/tablet, else false
 * @todo Refine the implementation considering laptops with touch display
 */
let isMobile = () => {
  try {
    document.createEvent('TouchEvent');

    return true;
  } catch(e) {
    return false;
  }
};

module.exports = isMobile;