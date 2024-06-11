const { fromJS } = require('immutable');

/**
 * Converts a regular JavaScript object into an immutable Map.
 * @param {Object} object - The object to convert.
 * @returns {Map} The immutable Map.
 */
function getImmutableObject(object) {
    return fromJS(object);
}

module.exports = getImmutableObject;

