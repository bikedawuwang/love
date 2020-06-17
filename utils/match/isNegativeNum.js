/**
 * @file match.js
 * @author zhouminghui02
 * @description 正则匹配
*/

/**
 *  isNegativeNum
 *  匹配是否为负整数
 * @param {*} val
 * @returns boolean
 */
const isNegativeNum = val => {
    return /^-[1-9]\d*$/.test(val);
}

module.exports = isNegativeNum;