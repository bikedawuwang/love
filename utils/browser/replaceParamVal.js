/**
 * @desc 修改url中的参数
 * @param {*} paramName
 * @param {*} replaceWith
 * @returns {string} 
 */
const replaceParamVal = (paramName, replaceWith) => {
    let oUrl = location.href.toString();
    let re = eval('/(' + paramName + '=)([^&]*)/gi');
    location.href = oUrl.replace(re, paramName + '=' + replaceWith);
    return location.href;
}

module.exports = replaceParamVal;