function getUa() {
    let ua = navigator.userAgent;
    return {
        wx: ua.match(/MicroMessenger\/([\d.]+)/),
        wxMiniProgram: ua.match(/MicroMessenger\/([\d.]+)/) && ua.indexOf('miniProgram') > -1,
        ios: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        android: ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1,
        iPhone: ua.indexOf('iPhone') > -1,
        iPad: ua.indexOf('iPad') > -1,
        qq: ua.match(/QQ\/([\d.]+)/),
        wyxApp: ua.match(/58WeiYingXiaoApp([\d.]*)/),
        wuba: ua.match(/WUBA([/\d.]*)/),
        wbtown: ua.match(/WBTown([/\d.]*)/),
        quickapp: /com\.application\.tongzhen/.test(ua),
        wbutown: ua.match(/wbutown([/\d.]*)/)
    };
}

module.exports =  getUa;