/** *************
 * @param src   加密字符串
 * @param key   加密密钥
 * @param iv   加密密钥偏移量
 * @return value  返回加密之后的字符串
 */

// import CryptoJS from 'crypto-js';
const CryptoJS = require('crypto-js')

function aesDecrypt(src, key, iv) {
    if (!src || typeof src !== 'string') {
        console.error('src is not string');
        return false;
    }
    if (!key || !iv) {
        console.error(`is not have${!key ? 'key' : 'iv'}`);
        return false;
    }
    let hexSrc = CryptoJS.format.Hex.parse(src)
    let aesKey  = CryptoJS.enc.Hex.parse(key);
    let aesIv = CryptoJS.enc.Hex.parse(iv);


    const decryptBytes =  CryptoJS.AES.decrypt(hexSrc, aesKey, {
        iv: aesIv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Utf8.stringify(decryptBytes)
}

module.exports = aesDecrypt