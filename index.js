const indexOfMin = (array, property) => {
    if (!Array.isArray(array)) {
        throw new Error('First argument must be an array');
    }
    const typeOfProperty = typeof property;
    if (property && typeOfProperty !== 'string' && typeOfProperty !== 'number') {
        throw new Error('Second argument must be a string or a number');
    }
    if (array.length === 0) {
        return -1;
    }
    let minIndex = 0;
    let minValue = property ? array[minIndex][property] : array[minIndex];
    let value;

    for (let i = 1; i < array.length; i++) {
        value = property ? array[i][property] : array[i];
        if (value < minValue) {
            minValue = value;
            minIndex = i;
        }
    }

    return minIndex;
};

module.exports = indexOfMin;