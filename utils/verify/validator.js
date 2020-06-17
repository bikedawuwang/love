/*
 * @Author: your name
 * @Date: 2020-06-17 14:59:50
 * @LastEditTime: 2020-06-17 15:12:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /CommonApiNPM/utils/verify/validator.js
 */ 
const strategies = require('./strategy');

class Validator {
    constructor () {
        this.cache = [];
    }

    add (field, rules) {
        const self = this;
        let i = 0, rule;
        for (i; i < rules.length;i++) {
            rule = rules[i];
            (function (rule) {
                const strategyAry = rule.strategy.split(':');
                const errorMsg = rule.errorMsg;
                const extendOptions = {};
                for (let key in rule) {
                    extendOptions[key] = rule[key];
                }

                self.cache.push(function () {
                    var strategy = strategyAry.shift();
                    strategyAry.unshift(field);
                    strategyAry.push(errorMsg);
                    strategyAry.push(extendOptions);

                    return strategies[strategy] && strategies[strategy].apply(null, strategyAry);
                });

            })(rule);
        }
    }

    // start:开始校验
    // 取出this.cache中的校验规则，真正的执行校验
    // 会执行所有的校验规则，并返回一个错误提示信息的集合(Array)
    // 无错误信息时返回空数组
    start () {
        let errorMsgAry = [];
        let i = 0, fn;
        for (i; i < this.cache.length;i++) {
            fn = this.cache[i]
            const errorMsg = fn();
            if (errorMsg) {
                // return errorMsg ;
                errorMsgAry.push(errorMsg);
                // return errorMsgAry ;
            }
        }

        return errorMsgAry;
    }
}

module.exports = Validator;
