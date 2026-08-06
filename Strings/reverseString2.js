/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    s = s.split("");

    let n = s.length;
    for (let x = 0; x < n; x = x + (2 * k)) {
        let n = Math.min(k, s.length - x);
        let mid = Math.floor(n / 2);

        for (let i = 0; i < mid; i++) {
            let temp = s[x + i];
            s[i + x] = s[x + n - 1 - i];
            s[x + n - 1 - i] = temp;
        }
    }
    return s.join("");
};