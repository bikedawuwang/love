/**
 *
 *  @desc android键盘遮挡输入框问题
 * @param {*} ref
 */
const fixKeyBoardKeepOut = (ref) => {
    setTimeout(() => {
        if (ref.current) {
            ref.current.scrollIntoView()
        } else {
            ref.scrollIntoView()
        }
    }, 500);
}

module.exports = fixKeyBoardKeepOut;