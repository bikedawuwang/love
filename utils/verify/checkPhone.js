/*
 * @Author: your name
 * @Date: 2020-06-17 15:21:27
 * @LastEditTime: 2020-06-17 15:22:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /CommonApiNPM/utils/verify/checkTel.js
 */ 

function checkPhone (phone) {
    let reg = /^1[3-9]\d{9}$/.test(phone)
    let reg2 = /([\d])\1{8,}/.test(phone)
    const result = {
        code: 0,
        msg: ''
    }
    if (!!phone & (phone.length == 11) & reg && !reg2) {
        result.code = 1
    } else {
        result.msg = phone ? '请输入正确手机号' : '请将信息填写完整'
    }
    return result
}

module.exports = checkPhone;