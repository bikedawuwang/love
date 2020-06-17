/*
 * @Author: your name
 * @Date: 2020-06-17 15:42:48
 * @LastEditTime: 2020-06-17 15:43:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /CommonApiNPM/utils/device/parseSearch.js
 */ 

function parseSearch (key, search) {
    let reSearch = /(?:[?&])(\w+)=([^#&\s]*)/g
    if (!search) {
        search = location.search
    }

    if (search.charAt(0) !== '?') {
        search = '?' + search
    }

    var temp = {}

    search.replace(reSearch, function (a, f, s) {
        temp[f] = decodeURIComponent(s)
    })
    if (key && temp[key]) {
        return temp[key]
    }
    return temp
}

module.exports = parseSearch;