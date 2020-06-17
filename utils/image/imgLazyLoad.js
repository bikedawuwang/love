/**
 *
 * @param {*} doms 要执行懒加载的dom元素，可以是一组，可以是一个
 * @param {Array} threshold 执行懒加载回调的相交比例
 * @param {String} rootMargin 执行懒加载的边距
 * @returns {*}
 */
function imgLazyLoad (doms, threshold, rootMargin) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((item) => {
            if (item.intersectionRatio <= 0) {
                return;
            }
            item.target.src = item.target.dataset.src;
            observer.unobserve(item.target);
        })
    }, {
        threshold: threshold, // 添加触发时机数组
        rootMargin: rootMargin // 延迟触发的条件
    });

    // onload 函数
    const onload = () => {
        if (Array.isArray(doms)) {
            doms.forEach((item) => {
                observer.observe(item.current) // 添加需要被观察的元素。
            })
        } else {
            observer.observe(doms.current);
        }
    }
    return onload;
}

module.exports =  imgLazyLoad;