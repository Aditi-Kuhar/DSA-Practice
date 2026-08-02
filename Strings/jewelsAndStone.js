//approach 1
//Time complexity: O(n*m) where n is the length of stones and m is the length of jewels
//space complexity: O(1)

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) 
{
    let count=0;
    for(let i=0;i<stones.length;i++)
    {
        for(let j=0;j<jewels.length;j++){
            if(stones[i]===jewels[j]){
                count++;
                break;
            }
        }
    }
    return count;
};

//approach 2
var numJewelsInStones = function (jewels, stones) {
    let count = 0;
    const jewelSet = new Set(jewels);

    for (let i = 0; i < stones.length; i++) {
        if (jewelSet.has(stones[i])) {
            count++;
        }
    }

    return count;
};