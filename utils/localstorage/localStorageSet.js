/**
 *
 *  对localStorage进行写入操作
 * @param {*} key
 * @param {*} value
 */
const localStorageSet = (key, value) => {
    if (typeof (value) === 'object') value = JSON.stringify(value);
    localStorage.setItem(key, value)
};

module.exports = localStorageSet;