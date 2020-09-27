const sum = (a, b) => {
    const res = a + b;
    if ((typeof(a && b) === 'number' && isFinite(a && b))) {
        return res;
    } else {
        return 'Error';
    }
}

module.exports = { sum };