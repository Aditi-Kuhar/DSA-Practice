//approach 1 which I wrote first

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) 
{
    let rcount=0;
    let lcount=0;
    let mainCount=0;
    for(let i=0;i<s.length;i++){
        s[i]==="R"? rcount++ :lcount++;
        if(rcount===lcount) mainCount++;
    }
    return mainCount;
};


//approach 2 with help of hints 
// Can we solve this using only one counter instead of two?

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) 
{
    let balance=0;
    let balancedCount=0;
    for(let i=0;i<s.length;i++){
        s[i]==="R"? balance++ :balance--;
        if(balance===0) balancedCount++;
    }
    return balancedCount;
};