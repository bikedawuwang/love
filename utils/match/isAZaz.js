/**
 *
 * @param {*} val
 * @returns boolean
 */

const isAZaz = val => {
    return /^[A-Za-z]+$/.test(val);
}

module.exports = isAZaz;