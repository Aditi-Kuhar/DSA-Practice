/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s) {
    s = s.split("");

    let n = s.length;

    for (let i = 0; i < Math.floor(n / 2); i++) {
        let temp = s[i];
        s[i] = s[n - 1 - i];
        s[n - 1 - i] = temp;
    }

    return s.join("");
};

//merse nhi hua khudh