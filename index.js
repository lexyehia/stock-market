function maxProfit(arr) {
    let result = [];

    maxProfitRecursive(arr);

    function maxProfitRecursive(arr) {
        if (arr.length === 0) return result;

        let [head, ...tail] = arr;

        let specificMargins = [];

        tail.forEach((e) => {
            specificMargins.push([head, e, e - head]);
        })

        let bestSpecificMargin = specificMargins.sort((a, b) => b[2] - a[2])[0];

        result.push(bestSpecificMargin);

        maxProfitRecursive(tail);
    }

    let bestOverallMargin = result.sort((a, b) => b[2] - a[2])[0];

    return bestOverallMargin[2];
}

module.exports = maxProfit;