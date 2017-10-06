const assert = require('chai').assert;
const app    = require('../index');

describe("The maxProfit function", () => {
    it("should return 16 for array [45, 24, 35, 31, 40, 38, 11]", () => {
        const result = app([45, 24, 35, 31, 40, 38, 11]);
        assert.equal(result, 16);
    })
})