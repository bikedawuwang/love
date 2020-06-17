/**
 *
 * @desc 获取url参数
 * @param {*} name
 * @param {*} [origin=null]
 * @returns {void}
 */
const getUrlParam = (name, origin = null) => {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let r = null;
    if (origin == null) {
        r = window.location.search.substr(1).match(reg);
    } else {
        r = origin.substr(1).match(reg);
    }
    if (r != null) return decodeURIComponent(r[2]);
    return null;
}

module.exports = getUrlParam;