/**
 *
 * localStorage 读取
 * @param {*} key
 * @returns {string}
 */
const localStorageGet = key => {
    return localStorage.getItem(key);
}

module.exports = localStorageGet;