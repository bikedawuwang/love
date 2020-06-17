function bodyCanScroll () {
    document.body.style.position = 'static'
    document.body.style.top = 0
    console.log('bodyCanScroll', window.sTop)
    window.scrollTo(0, window.sTop)
}

module.exports = bodyCanScroll