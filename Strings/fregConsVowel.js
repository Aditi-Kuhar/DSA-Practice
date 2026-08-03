/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let map=new Map();
    for(let i=0;i<s.length;i++){
        if(map.has(s[i])){
            map.set(s[i],map.get(s[i])+1);
        }
        else{
            map.set(s[i],1);
        }
    }
    let maxVowel = 0;
    let maxConsonant = 0;
    for (const [ch, count] of map) {
    if ("aeiou".includes(ch)) {
        maxVowel = Math.max(maxVowel, count);
    } else {
        maxConsonant = Math.max(maxConsonant, count);
    }
}
return maxVowel+maxConsonant;
};