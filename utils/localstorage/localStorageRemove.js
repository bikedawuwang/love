/**
 *
 * localStorage 删除某条 
 * @param {*} key
 */
const localStorageRemove = key => {
    localStorage.removeItem(key);
}

module.exports = localStorageRemove;