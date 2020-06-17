
/**
 * @file match.js
 * @author zhouminghui02
 * @description 正则匹配
*/


/**
 *  isPositiveNum
 *  匹配是否为正整数
 * @param {*} val
 * @returns boolean
 */
const isPositiveNum = val => {
    return /^[1-9]\d*$/.test(val);
}

module.exports = isPositiveNum;