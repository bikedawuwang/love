
function setNormalUrl (url, isPic = true) {
    const reg = /^(https|http)/i
    if (!url) {
        return ''
    }
    if (reg.test(url)) {
        return url
    } else {
        let pro = window.location.protocol
        if (url.startsWith('//')) {
            return pro + url
        }
        if (isPic) {
            return pro + '//pic2.58cdn.com.cn' + url
        }
    }
}

module.exports = setNormalUrl;