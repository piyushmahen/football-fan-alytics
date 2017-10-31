/**
 * @module utils
 */

let checkDomain = (url) => {
  if (url.indexOf('//') === 0) {
    url = location.protocol + url;
  }

  return url
           .toLowerCase()
           .replace(/([a-z])?:\/\//, '$1')
           .split('/')[0];
};

/**
 * Checks if a URL is an external URL.
 *
 * @param {string} currentURL - current URL of the page
 * @param {string} url - url to check if external
 * @returns {boolean} true if URL is external, else false
 */
let isExternalURL = (currentURL, url) => {
  return ((url.indexOf(':') > -1 || url.indexOf('//') > -1) && checkDomain(currentURL) !== checkDomain(url));
};

module.exports = isExternalURL;