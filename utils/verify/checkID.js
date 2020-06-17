/*
 * @Author: your name
 * @Date: 2020-06-17 15:21:57
 * @LastEditTime: 2020-06-17 15:24:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /CommonApiNPM/utils/verify/checkID.js
 */ 

function checkID (id) {
    let reg = /(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    const result = {
        code: 0,
        msg: ''
    }
    if (reg.test(id)) {
        result.code = 1
    } else {
        result.msg = '请填写正确身份证号'
    }
    return result
}

module.exports = checkID;