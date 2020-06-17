describe('Match API:', function () {
    describe('#isAZaz()', function () {
        it(`utils4fe.isAZaz('abcdABCD') should return true`, function () {
            assert(utils4fe.isAZaz('abcdABCD') === true)
        })
        it(`utils4fe.isAZaz(1231231231231) should return false`, function () {
            assert(utils4fe.isAZaz(132112323123) === false)
        })
    })

    describe('#isInteger()', function () {
        it(`utils4fe.isInteger(1.23) should return false`, function () {
            assert(utils4fe.isInteger(1.23) === false)
        })
        it(`utils4fe.isInteger(123) should return true`, function () {
            assert(utils4fe.isInteger(123) === true)
        })
    })

    describe('#isNegativeNum()', function() {
        it(`utils4fe.isNegativeNum(1) should return false`, function () {
            assert(utils4fe.isNegativeNum(1) === false)
        })
        it(`utils4fe.isNegativeNum(-1) should return true`, function () {
            assert(utils4fe.isNegativeNum(-1) === true)
        })
    })

    describe('#isPositiveNum()', function() {
        it(`utils4fe.isPositiveNum(-1) should return false`, function () {
            assert(utils4fe.isPositiveNum(-1) === false)
        })
        it(`utils4fe.isPositiveNum(1) should return true`, function () {
            assert(utils4fe.isPositiveNum(1) === true)
        })
    })

    describe('#isNotNegativeFloatNum()', function() {
        it(`utils4fe.isNotNegativeFloatNum(-1.23) should return false`, function () {
            assert(utils4fe.isNotNegativeFloatNum(-1.23) === false)
        })
        it(`utils4fe.isNotNegativeFloatNum(1.23) should return true`, function () {
            assert(utils4fe.isNotNegativeFloatNum(1.23) === true)
        })
    })

    describe('#isEmailAddress()', function() {
        it(`utils4fe.isEmailAddress('11111&11.com') should return false`, function () {
            assert(utils4fe.isEmailAddress('11111&11.com') === false)
        })
        it(`utils4fe.isEmailAddress('11111@qq.com') should return true`, function () {
            assert(utils4fe.isEmailAddress('11111@qq.com') === true)
        })
    })
})