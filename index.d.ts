declare namespace love {
	/**
	 * @desc 判断是否为整数
	 * @export
	 * @param {*} num
	 * @returns {boolean}
	 */
	export function isInteger(num: any): boolean
	/**
	 * @desc 判断是否为负整数
	 * @export
	 * @param {*} num
	 * @returns {boolean}
	 */
	export function isNegativeNum(num: any): boolean

	/**
	 *
	 * @desc 根据name读取cookie
	 * @param  {String} name
	 * @return {String}
	 */
	export function getCookie(name: string): string

	/**
	 *
	 * @desc 根据name删除cookie
	 * @param  {String} name
	 */
	export function removeCookie(name: string): void

	/**
	 *
	 * @desc  设置Cookie
	 * @param {String} name
	 * @param {String} value
	 * @param {Number} days
	 */
	export function setCookie(name: string, value: string, days: number): void

	/**
	 * @desc  字符串解密
	 * @param {String} src
	 * @param {String} key
	 * @param {String} iv
	 */
	export function aesDecrypt(src: string, key: string, iv: string): string

	/**
	 * @desc  字符串加密
	 * @param {String} src
	 * @param {String} key
	 * @param {String} iv
	 */
	export function aesEncrypt(src: string, key: string, iv: string): string

	/**
	 * @desc 二次封装axios
	 * @param {Object} option
	 */
	export function Ajax(option: object): void

	/**
	 * @desc 获取元素样式属性的值
	 * @param {DOM} element
	 * @param {String} attr
	 */
	export function getStyle(element: any, attr: string): object

	/**
	 * @desc 获取元素样式属性的值
	 * @param {DOM} element
	 * @param {String} attr
	 */
	export function Validator(): void

	/**
	 * @desc 验证姓名有效性
	 * @param {String} name
	 * @param {Number} min
	 * @param {Number} max
	 * @return {Object}
	 * {
	 *    code: 0 - 无效 1 - 有效
	 *    msg: 错误消息
	 * }
	 */
	export function checkName(name: string, min: number, max: number): object

	/**
	 * @desc 验证手机号有效性
	 * @param {String} phone
	 * @return {Object}
	 * {
	 *    code: 0 - 无效 1 - 有效
	 *    msg: 错误消息
	 * }
	 */
	export function checkPhone(phone: string): object

	/**
	 * @desc 验证验证码有效性
	 * @param {String} code
	 * @param {Number} length
	 * @return {Object}
	 * {
	 *    code: 0 - 无效 1 - 有效
	 *    msg: 错误消息
	 * }
	 */
	export function checkCode(code: string, length: number): object

	/**
	 * @desc 验证身份证有效性
	 * @param {String} id
	 * @return {Object}
	 * {
	 *    code: 0 - 无效 1 - 有效
	 *    msg: 错误消息
	 * }
	 */
	export function checkID(id: string): object

	/**
	 * @desc 获取浏览器参数值
	 * @param {String} key
	 * @param {String} search
	 */
	export function parseSearch(key: string, search: string): any

	/**
	 * @desc 解除页面滚动锁定
	 */
	export function bodyCanScroll(): void

	/**
	 * @desc 锁定页面滚动
	 * @param {Number} needTop
	 */
	export function bodyCannotScroll(needTop: number): void

	/**
	 * @desc 给不带域名的图片路径加上域名, 不带协议的加上协议，可以处理图片路径或者是常规url路径
	 * @param {String} url
	 * @param {Boolean} isPic
	 */
	export function setNormalUrl(url: string, isPic: boolean): string

	/**
	 * @desc url上添加查询参数,如果已存在，则替换为新值
	 * @param {String} url
	 * @param {String} key
	 * @param {*} value
	 */
	export function appendUrlParam(url: string, key: string, value: any): string

	/**
	 * @desc 为URL增加查询参数，并返回新的URL地址
	 * @param {String} url
	 * @param {Object} externalParams
	 */
	export function addParamUrl(url: string, externalParams: object): string

	/**
	 * @desc 根据key标记数组元素是否重复
	 * @param {Array} arr
	 * @param {String} key
	 * @param {String} errorMsg
	 */
	export function flagRepeat(arr: Array<any>, key: string, errorMsg: string): Array<any>

	/**
	 * @desc 根据指定的唯一标识进行对象数组去重
	 * @param {Array} arr
	 * @param {String} key
	 */
	export function getSetArray(arr: Array<any>, key: string): Array<any>

	/**
	 * @desc 将数组按照指定的长度分为两个数组，返回包括这两个数组的数组
	 * @param {Array} source
	 * @param {Number}len
	 */
    export function arrFromArray(source: Array<any>, len: number): Array<any>
    
    /**
     * @desc 判断当前设备是否iphone x
     */
    export function isIPhoneX(): void;
	/**
	 * @desc 判断是否为正整数
	 * @export
	 * @param {*} num
	 * @returns {boolean}
	 */
	export function isPositiveNum(num: any): boolean

	/**
	 *
	 * @desc 匹配由 26 个英文字母组成的字符串
	 * @export
	 * @param {*} val
	 * @returns {boolean}
	 */
	export function isAZaz(val: any): boolean

	/**
	 *
	 * @desc 匹配非负浮点数
	 * @export
	 * @param {*} val
	 * @returns {boolean}
	 */
	export function isNotNegativeFloatNum(val: any): boolean

	/**
	 * @desc 匹配电子邮箱
	 * @export
	 * @param {*} val
	 * @returns {boolean}
	 */
	export function isEmailAddress(val: any): boolean
	/**
	 *
	 * @desc 根据name读取cookie
	 * @param  {String} name
	 * @return {String}
	 */
	export function getCookie(name: string): string

	/**
	 *
	 * @desc 根据name删除cookie
	 * @param  {String} name
	 */
	export function removeCookie(name: string): void

	/**
	 *
	 * @desc  设置Cookie
	 * @param {String} name
	 * @param {String} value
	 * @param {Number} days
	 */
	export function setCookie(name: string, value: string, days: number): void

	/**
	 *
	 * @desc localStorage 获取
	 * @export
	 * @param {*} key
	 * @returns {*}
	 */
	export function localStorageGet(key: string): any

	/**
	 *
	 * @desc localStorage 写入
	 * @export
	 * @param {string} key
	 * @param {*} value
	 */
	export function localStorageSet(key: string, value: any): void

	/**
	 *
	 * @desc localStorage 删除
	 * @export
	 * @param {string} key
	 */
	export function localStorageRemove(key: string): void
}

declare module 'love' {
	export = love
}
