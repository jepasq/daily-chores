"use strict";

/** Pad a number with '0'
 *
 * @param {integer} num The number to be padded.
 *
 * @return {string} A string.
 *
 */
function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

/** Returns the given date as a DD-MM-YYYY string
 *
 * @param date A date object
 *
 * @return A string.
 *
 */

function formatDate(date) {
    return [
	padTo2Digits(date.getDate()),
	padTo2Digits(date.getMonth() + 1),
	date.getFullYear(),
    ].join('-');
}

// Only export if module is defined
if (typeof module !== 'undefined') {
    module.exports = { formatDate };
}
