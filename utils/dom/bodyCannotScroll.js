function bodyCannotScroll (needTop) {
    const top = document.body.scrollTop || document.documentElement.scrollTop
    document.body.style.position = 'fixed'
    document.body.style.top =
        typeof needTop != 'undefined' ? needTop : `${-top}px`

    window.sTop = top
}

module.exports = bodyCannotScroll