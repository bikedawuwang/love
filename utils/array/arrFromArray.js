function arrFromArray (source, len = 6) {
    let result = [[]]
    let j = 0
    let reference = result[j]
    for (let i = 0; i < source.length; i++) {
        if (i % len === 0) {
            result[++j] = []
            reference = result[j]
        }
        reference.push(source[i])
    }
    return result.filter((arr) => arr.length > 0)
}

module.exports = arrFromArray;