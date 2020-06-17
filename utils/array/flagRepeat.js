const { mode } = require("crypto-js")

function getRepeatFlag (arr, key) {
    console.log('arr', arr)
    const tempKeyObj = {}
    arr.map((item) => {
        const val = item[key]
        if (val && val in tempKeyObj) {
            tempKeyObj[val] = true
        } else {
            tempKeyObj[val] = false
        }
    })
    return tempKeyObj
}

/**
 * 标记出repeat
 * arr [{id:1},{id:2},{id:3},{id:2},{id:3}]
 * key  id
 * getRepeatFlag(arr, key) {1:false,2:true,3:true}
 * flagRepeat(arr,key)[{id:1,isDuplicate:false},{id:2,isDuplicate:true},{id:3,isDuplicate:true},{id:2,isDuplicate:true},{id:3,isDuplicate:true}]
 */
function flagRepeat (arr, key, errorMsg = '手机号重复') {
    const flagObj = getRepeatFlag(arr, key)
    arr.map((item) => {
        const keyVal = item[key]
        const isDuplicate = flagObj[keyVal]

        item.isDuplicate = isDuplicate
        item.errorMsg = isDuplicate ? errorMsg : ''
    })
    return arr
}

module.exports = flagRepeat;