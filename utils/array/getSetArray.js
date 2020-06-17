function getSetArray (arr, key) {
    try {
        if (arr && arr.length > 0) {
            let obj = {}
            arr = arr.reduce((cur, next) => {
                obj[next[key]] ? '' : (obj[next[key]] = true && cur.push(next))
                return cur
            }, [])
        }
        return arr
    } catch (error) {
        return arr
    }
}

module.exports = getSetArray;