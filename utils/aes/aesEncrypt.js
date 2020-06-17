/** *************
 * @param src   加密字符串
 * @param key   加密密钥
 * @param iv   加密密钥偏移量
 * @return value  返回加密之后的字符串
 */

// import CryptoJS from 'crypto-js';
const CryptoJS = require('crypto-js')

function aesEncrypt(src, key, iv) {
    if (!src || typeof src !== 'string') {
        console.error('src is not string');
        return false;
    }
    if (!key || !iv) {
        console.error(`is not have${!key ? 'key' : 'iv'}`);
        return false;
    }
    let aesKey  = CryptoJS.enc.Hex.parse(key);
    let aesIv = CryptoJS.enc.Hex.parse(iv);


    return CryptoJS.AES.encrypt(src, aesKey, {
        iv: aesIv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
}

module.exports = aesEncrypt;