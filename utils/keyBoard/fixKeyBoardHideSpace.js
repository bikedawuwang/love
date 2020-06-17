/**
 * @desc ios键盘收起推上去的位置没还原留下空白问题
 *
 */
const fixKeyBoardHideSpace = () => {
    document.body.addEventListener('focusout', () => {
        // 软键盘收起的事件处理
        setTimeout(() => {
            const scrollHeight =
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0
            try {
                window.scrollTo(0, Math.max(scrollHeight - 1, 0))
            } catch (error) {
                console.error('error windowScrollTo', error)
            }
        }, 100)
    })
}

module.exports = fixKeyBoardHideSpace;