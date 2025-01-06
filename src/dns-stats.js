const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const capture = {};
  for (let i = 0; i < domains.length; i += 1) {
    let current = '';
    const part = domains[i].split('.').reverse();

    for (let j = 0; j < part.length; j += 1) {
      current += `.${part[j]}`;
      capture[current] = (capture[current] || 0) + 1;
    }
  }
  return capture;
}

module.exports = {
  getDNSStats
};
