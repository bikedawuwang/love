function addParamUrl (url, externalParams) {
    url = url || window.location.href

    for (var key in externalParams) {
        var value = encodeURIComponent(externalParams[key])
        var urlInfo = url.split('?')
        var s = urlInfo[1]
        var tmp = key + '=' + value
        var reg = new RegExp('(^|)' + key + '=([^&]*)(|$)')

        if (getType(value) !== undefined && getType(value) !== null) {
            if (url.match(reg) != null) {
                url = url.replace(eval(reg), tmp)
            } else if (getType(s) !== undefined) {
                url += '&' + key + '=' + value
            } else {
                url += '?' + key + '=' + value
            }
        }
    }
    return url
}

module.exports = addParamUrl