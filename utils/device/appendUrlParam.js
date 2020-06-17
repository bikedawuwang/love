function appendUrlParam (url, key, value) {
    var newUrl = ''
    url = url || window.location.href
    key = encodeURIComponent(key)
    value = encodeURIComponent(value)
    var reg = new RegExp('(^|)' + key + '=([^&]*)(|$)')
    var tmp = key + '=' + value
    var urlInfo = url.split('?')
    var s = urlInfo[1]
    if (url.match(reg) != null) {
        newUrl = url.replace(eval(reg), tmp)
    } else {
        if (getType(s) !== undefined) {
            newUrl = url + '&' + tmp
        } else {
            newUrl = url + '?' + tmp
        }
    }
    return newUrl
}

module.exports = appendUrlParam