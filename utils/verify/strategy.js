/*
 * @Author: your name
 * @Date: 2020-06-17 14:57:07
 * @LastEditTime: 2020-06-17 15:16:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /CommonApiNPM/utils/verify/strategy.js
 */ 


const strategies = {
    isNonEmpty: function (value, errorMsg = '参数不能为空') {
        if (value.length <= 0) {
            return errorMsg;
        }
    },

    isRequired: function (value, errorMsg = '参数为必填项') {
        if (value === undefined) {
            return errorMsg;
        }
    },

    maxLength: function (value, length, errorMsg = '字符串长度限制最大 ' + length + '个字符') {
        if (value.length > length) {
            return errorMsg;
        }
    },

    minLength: function (value, length, errorMsg = '字符串长度限制最小 ' + length + '个字符') {
        if (value.length < length) {
            return errorMsg;
        }
    },
    isPhone: function (phone, errorMsg = '请输入正确的手机号') {
        if (!/^1\d{10}$/.test(phone)) {
            return errorMsg
        }

    },
    // 帮拆购车金需求增加
    isPhone2: function (phone, errorMsg = '请输入正确的手机号') {
        if (!/^1[3-9]\d{9}$/.test(phone) || /([\d])\1{8,}/.test(phone)) {
            return errorMsg
        }

    },
    isValidName: function (name, minLength, errorMsg = '请输入正确的姓名') {
        const isValidName = name.length >= minLength && /^[\u4E00-\u9FA5]+$/.test(name)
        if (!isValidName) {
            return errorMsg
        }

    },
    isNotZero: function (value, errorMsg) {
        if (value == 0) {
            return errorMsg;
        }
    }

}

module.exports = strategies ;
