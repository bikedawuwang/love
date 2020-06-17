/**
 *
 *
 * @param {*} imgSrc
 * @param {*} imgWidth
 * @param {*} imgHeight
 * @param {*} uiWidth
 * @param {*} uiHeight
 * @returns {*}
 */
function cutImage (imgSrc, imgWidth, imgHeight, uiWidth, uiHeight) {
    let newImgSrc = '';
    if (newImgSrc.indexOf('?') > -1) {
        newImgSrc = imgSrc.split('?')[0]
    } else {
        newImgSrc = imgSrc
    }
    if (imgWidth && imgHeight) {
        const ratio = (imgWidth / imgHeight).toFixed(2);
        let showWidth, showHeight;
        if (ratio <= (uiWidth / uiHeight).toFixed(2)) {
            if (imgWidth > uiWidth) {
                showWidth = uiWidth;
            } else {
                showWidth = imgWidth;
            }
            showHeight = parseInt(showWidth * (uiHeight / uiWidth));
        } else if (ratio > (uiWidth / uiHeight).toFixed(2)) {
            if (imgHeight > uiHeight) {
                showHeight = uiHeight;
            } else {
                showHeight = imgHeight;
            }
            showWidth = parseInt(showHeight * (uiWidth / uiHeight));
        }
        newImgSrc = `${newImgSrc}?h=${showHeight}&w=${showWidth}&crop=1`;
    } else {
        newImgSrc = `${newImgSrc}?w=${uiWidth}&h=${uiHeight}&crop=1`;
    }
    return newImgSrc;
}

module.exports = cutImage;