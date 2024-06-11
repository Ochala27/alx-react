const { Map } = require('immutable');

/**
 * Converts a regular JavaScript object into an immutable Map.
 * @param {Object} object - The object to convert.
 * @returns {Map} The immutable Map.
 */
function getImmutableObject(object) {
    return Map(object);
}

module.exports = getImmutableObject;

