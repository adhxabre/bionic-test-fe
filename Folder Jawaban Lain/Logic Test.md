# Logic Test #1

```js title="index.js"
function doPattern(n) {
    for (let i = 1; i <= n; i++) {
        let output = '';

        for (let j = 1; j <= n; j++) {
            if (j < i) {
                output += j;
            } else if (j === i) {
                output += '*';
            } else {
                output += j;
            }
        }

        console.log(output);
    }
}

doPattern(5);
doPattern(4);
```

# Logic Test #2

``` js title="index.js"
function findMaxGap(prices) {
    if (prices.length < 2) {
        return 0;
    }

    let maxGap = 0;
    let minPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            let currentGap = prices[i] - minPrice;

            if (currentGap > maxGap) {
                maxGap = currentGap;
            }
        }
    }

    return maxGap;
}

console.log(findMaxGap([10, 7, 5, 8, 11, 9, 1]));
```