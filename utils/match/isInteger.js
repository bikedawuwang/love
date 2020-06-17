/**
 * @file match.js
 * @author zhouminghui02
 * @description 正则匹配
*/


/**
 * isInteger
 * 匹配整数
 * @param {*} val
 * @returns boolean
 */
const isInteger = val => {
	return /^(-|\+)?\d+$/.test(val);
};

module.exports = isInteger;