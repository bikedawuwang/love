/*
 * @Author: your name
 * @Date: 2020-06-17 15:21:36
 * @LastEditTime: 2020-06-17 15:31:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /CommonApiNPM/utils/verify/checkCode.js
 */ 
// 验证验证码
function checkCode (code, length = 4) {
    const result = {
        code: 0,
        msg: ''
    }
    if (!!code & (code.length == length)) {
        result.code = 1
    } else {
        result.msg = code ? '请输入正确验证码' : '请将信息填写完整'
    }
    return result
}

module.exports = checkCode