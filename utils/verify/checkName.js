/*
 * @Author: your name
 * @Date: 2020-06-17 15:21:19
 * @LastEditTime: 2020-06-17 15:23:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /CommonApiNPM/utils/verify/checkName.js
 */ 

function checkName (name, min, max) {
    let reg = /^[\u4E00-\u9FA5]+$/
    const result = {
        code: 0,
        msg: ''
    }
    if (
        (min ? name.length >= min : true) &&
        (max ? name.length <= max : true) &&
        reg.test(name)
    ) {
        result.code = 1
    } else {
        result.msg = '请填写真实姓名'
    }
    return result
}

module.exports = checkName;