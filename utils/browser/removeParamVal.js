/**
 *
 * @desc 删除url中某个参数
 * @param {*} name
 * @returns {void}
 */
const removeParamVal = name => {
    let loca = location;
    let baseUrl = loca.origin + loca.pathname + "?";
    let query = loca.search.substr(1);
    if (query.indexOf(name) > -1) {
        let obj = {};
        let arr = query.split("&");
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].split("=");
            obj[arr[i][0]] = arr[i][1];
        }
        delete obj[name];
        let url = baseUrl + JSON.stringify(obj).replace(/[\"\{\}]/g, "").replace(/\:/g, "=").replace(/\,/g, "&");
        return url
    }
}

module.exports = removeParamVal;