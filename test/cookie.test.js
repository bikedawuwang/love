describe('Cookie API:', function () {
    describe('#getCookie()', function () {
        before(function () {
            utils4fe.setCookie('test', 'getTestValue')
        })
        it(`utils4fe.getCookie('test', 'getTestValue') should return true`, function () {
            assert(utils4fe.getCookie('test') === 'getTestValue')
        })
        it(`utils4fe.getCookie('empty', '') should return true`, function () {
            assert(utils4fe.getCookie('empty') === '')
        })
        after(function () {
            utils4fe.removeCookie('test')
        })
    })

    describe('#removeCookie()', function () {
        before(function () {
            utils4fe.setCookie('test', 'removeTestValue')
        })
        it(`utils4fe.removeCookie('test') should return false`, function () {
            utils4fe.removeCookie('test')
            assert.notEqual(utils4fe.getCookie('test') === 'removeTestValue', true)
        })
    })

    describe('#setCookie()', function () {
        it(`utils4fe.getCookie('test', 'setCookie') should return true`, function () {
            utils4fe.setCookie('test', 'setCookie')
            assert(utils4fe.getCookie('test') === 'setCookie')
        })
        after(function () {
            utils4fe.removeCookie('test')
        })
    })
})