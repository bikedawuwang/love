function isIPhoneX () {
    var u = navigator.userAgent
    var isPhoneX = false
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
    if (isIOS && screen.height == 812 && screen.width == 375) {
        isPhoneX = true
    }
    return isPhoneX
}

module.exports = isIPhoneX;