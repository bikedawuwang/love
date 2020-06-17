function getStyle (element, attr) { // 获取车系的右边距，兼容
    if (element.currentStyle) {
        return element.currentStyle[attr];
    } else {
        return getComputedStyle(element, false)[attr];
    }
}

module.exports = getStyle;