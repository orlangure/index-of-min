const indexOfMin = require('./index');
const assert = require('assert');

describe('#indexOfMin(array, property)', () => {
    it('should throw an exception on non-array first argument', () => {
        assert.throws(
            () => {
                indexOfMin({}, 'object');
            },
            /First argument must be an array/
        );
    });

    it('should throw an exception on non-string or non-numeric second argument (if provided)', () => {
        const badValues = [
            {}, true, [], a => a, {a: 'b'}
        ];
        badValues.forEach(value => {
            assert.throws(
                () => {
                    indexOfMin([], value);
                },
                /Second argument must be a string or a number/
            );
        });
    });

    it('should return -1 on empty array', () => {
        assert.equal(indexOfMin([], 'meh'), -1);
    });

    it('should return zero for an array with only one value', () => {
        assert.equal(
            indexOfMin(['meh']),
            0
        );
        assert.equal(
            indexOfMin([{a: 1}], 'a'),
            0
        );
    });

    it('should be able to find min element in array of two primitive values', () => {
        const arraysToTest = [
            [2, 1], ['b', 'a'], [true, false]
        ];
        arraysToTest.forEach(array => {
            assert.equal(
                indexOfMin(array),
                1
            );
            assert.equal(
                indexOfMin(array.reverse()),
                0
            );
        });
    });

    it('should be able to find min element in array of two objects', () => {
        const arraysToTest = [
            [{a: 2}, {a: 1}], [{a: 'b'}, {a: 'a'}], [{a: true}, {a: false}]
        ];
        arraysToTest.forEach(array => {
            assert.equal(
                indexOfMin(array, 'a'),
                1
            );
            assert.equal(
                indexOfMin(array.reverse(), 'a'),
                0
            );
        });
    });
});