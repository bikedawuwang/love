/**
 *
 *  匹配非负浮点数
 * @param {*} val
 * @returns {boolean}
 */
const isNotNegativeFloatNum = val => {
    return /^\d+(\.\d+)?$/.test(val);
}

module.exports = isNotNegativeFloatNum;