describe('localStorage API:', function () {
    describe('#localStorageGet()', function () {
        before(function () {
            utils4fe.localStorageSet('test', 'getTestValue')
        })
        it(`utils4fe.localStorageGet('test', 'getTestValue') should return true`, function () {
            assert(utils4fe.localStorageGet('test') === 'getTestValue')
        })
        it(`utils4fe.localStorageGet('empty', '') should return null`, function () {
            assert(utils4fe.localStorageGet('empty') === null)
        })
        after(function () {
            utils4fe.localStorageRemove('test')
        })
    })

    describe('#localStorageRemove()', function () {
        before(function () {
            utils4fe.localStorageSet('test', 'removeTestValue')
        })
        it(`utils4fe.localStorageRemove('test') should return false`, function () {
            utils4fe.localStorageRemove('test')
            assert.notEqual(utils4fe.localStorageGet('test') === 'removeTestValue', true)
        })
    })

    describe('#localStorageSet()', function () {
        it(`utils4fe.localStorageSet('test', 'setLocalStorage') should return true`, function () {
            utils4fe.localStorageSet('test', 'setLocalStorage')
            assert(utils4fe.localStorageGet('test') === 'setLocalStorage')
        })
        after(function () {
            utils4fe.localStorageRemove('test')
        })
    })
})